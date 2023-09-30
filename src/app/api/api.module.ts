import { DashboardRepository } from './dashboard/dashboard.repository';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

const REPOSITORIES = [DashboardRepository];

@NgModule({
  imports: [CommonModule, HttpClientModule],
  providers: [...REPOSITORIES],
})
export class ApiModule {}
