import { Component, HostBinding, effect } from '@angular/core';
import { ChatService } from '@core/services/chat.service';
import { ChatExtras } from '@shared/models';
import { EChartsOption } from 'echarts';

type Node = {
  id: string;
  name: string;
  x: number;
  y: number;
  symbolSize: number;
  category: number;
};

@Component({
  selector: 'rtm-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.scss'],
})
export class GraphComponent {
  public options: EChartsOption = {};
  public readonly data = this._chatService.extras;

  @HostBinding('class') public get classes(): string {
    return !!this.data()
      ? 'flex h-full flex-col relative'
      : 'flex h-full flex-col justify-center items-center';
  }

  constructor(private readonly _chatService: ChatService) {
    effect(() => {
      this.initOptions(this._chatService.extras());
    });
  }

  public initOptions(data?: ChatExtras): void {
    const studies: Node[] =
      data?.kierunki_studiow?.map((study, idx) => ({
        id: `1${idx}`,
        name: study,
        x: Math.random() * 45,
        y: Math.random() * 50 + 50,
        symbolSize: 25,
        category: 1,
      })) || [];

    const works: Node[] =
      data?.zawody?.map((work, idx) => ({
        id: `2${idx}`,
        name: work,
        x: Math.random() * 45 + 55,
        y: Math.random() * 50 + 50,
        symbolSize: 25,
        category: 2,
      })) || [];

    type City = Node & { universities: string[] };

    const places: City[] =
      Object.keys(data?.miasta || {})?.map((city, idx) => ({
        id: `3${idx}`,
        name: city,
        x: Math.random() * 100,
        y: Math.random() * 50,
        symbolSize: 25,
        category: 3,
        universities: data?.miasta?.[city] || [],
      })) || [];

    let universities: Node[] = [];
    places.forEach((place) => {
      universities = [
        ...universities,
        ...(place.universities?.map((university, idx) => ({
          id: `${place.id}-${idx}`,
          name: university,
          x: Math.random() * 100,
          y: Math.random() * 50,
          symbolSize: 15,
          category: 3,
        })) || []),
      ];
    });

    const nodes = [
      {
        id: '0',
        name: 'Ty',
        category: 0,
        symbolSize: 50,
        x: 50,
        y: 50,
      },
      ...universities,
      ...studies,
      ...places,
      ...works,
    ];

    const links = [
      ...studies.map((study) => ({
        source: '0',
        target: study.id,
      })),
      ...works.map((work) => ({
        source: '0',
        target: work.id,
      })),
      ...places.map((place) => ({
        source: '0',
        target: place.id,
      })),
      ...universities.map((university) => ({
        source: university.id.split('-')[0],
        target: university.id,
      })),
    ];

    const categories = [
      { name: '' },
      { name: 'Edukacja' },
      { name: 'Zawody' },
      { name: 'Placówki' },
    ];

    this.options = {
      tooltip: {
        formatter: (params: { data: { name: string } }) => params.data.name,
        show: !!data,
      } as EChartsOption['tooltip'],
      legend: [
        {
          data: categories.map(function (a: { name: string }) {
            return a.name;
          }),
        },
      ],
      emphasis: {
        focus: 'adjacency',
      },
      series: [
        {
          type: 'graph',
          layout: 'none',
          data: nodes,
          links: links,
          categories,
          roam: true,
          label: {
            show: true,
            position: 'right',
            formatter: '{b}',
          },
          labelLayout: { hideOverlap: true },
          scaleLimit: { min: 0.4, max: 2 },
          lineStyle: {
            color: 'source',
            curveness: 0.3,
          },
        },
      ],
    };
  }
}
