import { Component, OnInit } from '@angular/core';
import { Pensamento } from '../pensamento';
import { PensamentoService } from '../pensamento.service';

@Component({
  selector: 'app-listar-pensamentos',
  templateUrl: './listar-pensamentos.component.html',
  styleUrls: ['./listar-pensamentos.component.scss']
})
export class ListarPensamentosComponent implements OnInit {

  constructor(private service: PensamentoService) { }
  listaPensamentos: Pensamento[] = [];

  ngOnInit(): void {
    this.service.listar().subscribe((lista) => {
      this.listaPensamentos = lista
    })
  }
}
