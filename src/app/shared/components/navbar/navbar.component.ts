import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  // @ViewChild('searchData') searchData: HTMLInputElement.ElementRef: ElementRef
  // @ViewChild('searchBar') searchBar: ElementRef | null = null;
  @Output() onSearchEmiter: EventEmitter<string> = new EventEmitter<string>()
  searchBar!: any;

  constructor() { }

  ngOnInit(): void {

  }
  onSearch(event: Event) {
    console.log();
    this.onSearchEmiter.emit()
  }


}
