import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ChartType, Stat, Chat, Transaction } from './dashboard.model';

import { statData, revenueChart, salesAnalytics, sparklineEarning, sparklineMonthly, chatData, transactions } from './data';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

/**
 * Dashboard Component
 */
export class DashboardComponent implements OnInit {

  term: any;
  chatData: Chat[];
  transactions: Transaction[];
  statData: Stat[];

  constructor(private modalService: NgbModal, public formBuilder: FormBuilder) {
  }

  // bread crumb items
  breadCrumbItems: Array<{}>;

  revenueChart      : ChartType;
  salesAnalytics    : ChartType;
  sparklineEarning  : ChartType;
  sparklineMonthly  : ChartType;

  showAddedPolicy     : boolean;
  showAutopayEnroll   : boolean;
  showAutopayUpdated  : boolean;
  showAutopayRemoved  : boolean;

  // Form submit
  chatSubmit: boolean;
  formData: FormGroup;

  ngOnInit(): void {
    this.breadCrumbItems = [{ label: 'Home', link: '/', active: true }, { label: 'Policy Dashboard', active: true }];
    this.formData = this.formBuilder.group({
      message: ['', [Validators.required]],
    });
    this._fetchData();

    this.showAddedPolicy      = false;
    this.showAutopayEnroll    = false;
    this.showAutopayUpdated   = false;
    this.showAutopayRemoved   = false;
  }

  private _fetchData() {
    this.revenueChart = revenueChart;
    this.salesAnalytics = salesAnalytics;
    this.sparklineEarning = sparklineEarning;
    this.sparklineMonthly = sparklineMonthly;
    this.chatData = chatData;
    this.transactions = transactions;
    this.statData = statData;
  }

  /**
   * Returns form
   */
  get form() {
    return this.formData.controls;
  }

  /**
   * Modal Open
   * @param content modal content
   */
   openModal(content: any) {
    this.modalService.open(content, { centered: true });
  }

  /**
   * Save the message in chat
   */
  messageSave() {
    const message = this.formData.get('message').value;
    const currentDate = new Date();
    if (this.formData.valid && message) {
      // Message Push in Chat
      this.chatData.push({
        align: 'right',
        name: 'Ricky Clark',
        message,
        time: currentDate.getHours() + ':' + currentDate.getMinutes()
      });

      // Set Form Data Reset
      this.formData = this.formBuilder.group({
        message: null
      });
    }

    this.chatSubmit = true;
  }

  addedPolicy() {
    this.showAddedPolicy = !this.showAddedPolicy;
  }
  autopayEnroll() {
    this.showAutopayEnroll = !this.showAutopayEnroll;
  }
  autopayUpdated() {
    this.showAutopayUpdated = !this.showAutopayUpdated;
  }
  autopayRemoved() {
    this.showAutopayRemoved = !this.showAutopayRemoved;
  }

}
