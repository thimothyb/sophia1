import { Component, OnInit } from '@angular/core';

import {listacursosI} from '../../modelos/listacursos.interface';
import { CursosService } from '../../services/cursos.service';


@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent implements OnInit {

  curso:listacursosI[] | undefined;

  constructor( private CursosService: CursosService) { }

  ngOnInit(): void {
    this.CursosService.buscarCurso().subscribe((data: listacursosI[] | undefined) => {
      this.curso =data
      console.log(data)
    })
  }

}
