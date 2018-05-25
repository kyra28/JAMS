import { Component, OnInit } from '@angular/core';
import * as io from 'socket.io-client';

@Component({
  selector: 'app-etudiant',
  templateUrl: './etudiant.component.html',
  styleUrls: ['./etudiant.component.css']
})
export class EtudiantComponent implements OnInit {
  public value: string;
  constructor() { }

  ngOnInit() {

    var socket=io.connect("http://localhost:3000");
    //socket.on("news",(data:any)=>alert(data));
    //socket.emit("news","hello");

    socket.emit('add user', 'eleve');
    socket.on('coucou', function(){
      console.log("je suis la");
      this.value="test";
    });
    socket.on('next',function(data){
      console.log("eleve_next");
      //checkPoints(data.bonneReponse);
      //chargeQuestion(data);
    });

    socket.on('start',function(data){
      //chargeQuestion(data);
    });
    socket.on('finish',function(){
      //checkPoints();
      console.log("point");
      document.getElementById("question").innerHTML = "Vous avez "+"point"+" points!";
    });
  }

}
