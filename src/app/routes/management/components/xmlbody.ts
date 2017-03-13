import { Component, Input } from '@angular/core';

@Component({
  selector: 'xml-body',
  template: `<textarea class="form-control" rows="12">{{xmlbody}}</textarea>`
})

export class XMLBodyComponent {
  @Input() xmlbody: string = '';
}
