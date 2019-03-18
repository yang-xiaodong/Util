import { Component, OnInit } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd';
import { env } from '../../env';

@Component( {
    selector: 'app-basic-form',
    templateUrl: !env.dev() ? './html/basic-form.component.html' : '/View/Demo/Forms/BasicForm',
} )
export class BasicFormComponent implements OnInit {

    model;

    constructor( private msg: NzMessageService ) { }

    ngOnInit(): void {
        this.model = {};
    }

    submit() {
        setTimeout( () => {
            this.msg.success( `提交成功` );
        }, 1000 );
    }
}
