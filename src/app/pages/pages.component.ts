import {Component} from "@angular/core";

@Component({
    selector: 'pages',
    template: `
    <h1>Hello World!</h1>
    We are using node <script>document.write(process.versions.node)</script>,
    Chrome <script>document.write(process.versions.chrome)</script>,
    and Electron <script>document.write(process.versions.electron)</script>.
    `
})

export class PagesComponent {

}