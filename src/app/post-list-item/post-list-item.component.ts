import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

  @Input() title: string;
  @Input() description: string;
  @Input() loveIts: number;
  @Input() indexOfPost: number;

  lastUpdate = new Date();
  
  constructor() { }

  ngOnInit() {
  }

  getColor() {
    if(this.loveIts > 0) {
      return 'green'
    } else if(this.loveIts < 0) {
      return 'red'
    } else {
      return ''
    }
  }

  onLoveIt() {
    this.loveIts[this.indexOfPost] = this.loveIts ++
  }

  onDontLoveIt() {
    this.loveIts[this.indexOfPost] = this.loveIts --
  }

}
