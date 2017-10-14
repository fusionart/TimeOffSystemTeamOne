import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/primeng';


@Component({
  selector: 'app-dropdown',
  templateUrl: '../../templates/dropdown.component/dropdown.component.html',
  styleUrls: ['../../../assets/styles/dropdown.component.css']
})
export class DropdownComponent implements OnInit {

  tot: SelectItem[];
  selectedTot: any;
  constructor() {
    this.tot = [];
    this.tot.push({ label: 'Paid Time Off', value: { id: 1, name: 'Paid Time Off', code: 'PTO' } });
    this.tot.push({ label: 'Unpaid Time Off', value: { id: 2, name: 'Unpaid Time Off', code: 'UPTO' } });
    this.tot.push({ label: 'Sick Leave', value: { id: 3, name: 'Sick Leave', code: 'SL' } });
  }

  ngOnInit() {
  }

}
