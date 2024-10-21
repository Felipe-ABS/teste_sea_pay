import { Component } from '@angular/core';

@Component({
  selector: 'app-transactions',
  standalone: true,
  imports: [],
  templateUrl: './transactions.component.html',
  styleUrl: './transactions.component.css'
})
export class TransactionsComponent {
  transactionsList = [
    {tipo: "Pessoal", valor: 2500, status: "concluido", nome: "Felipe Silva", conta: "0001", chave: "****-Y6D6-AS78-****", data: "27/10/2024"},
    {tipo: "Lojista", valor: 2007, status: "concluido", nome: "Jamili Moreno", conta: "2007", chave: "****-F27A-J26M-****", data: "20/07/2023"},
    {tipo: "Pessoal", valor: 1234, status: "concluido", nome: "Bruno", conta: "0021", chave: "****-Y6D6-AS78-****", data: "20/11/2022"},
    {tipo: "Pessoal", valor: 5678, status: "concluido", nome: "Mario Galo", conta: "0064", chave: "****-Y6D6-AS78-****", data: "20/10/2018"},
    {tipo: "Lojista", valor: 100000, status: "concluido", nome: "Ubisoft", conta: "0723", chave: "****-Y6D6-AS78-****", data: "27/10/2024"},
  ]
}
