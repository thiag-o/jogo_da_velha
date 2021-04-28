let arraydiv = []
let array = [0,0,0,0,0,0,0,0,0]
let p2 = document.querySelector('#p2');
let container = document.querySelector('#div-central');



let contx = document.querySelector("#cont-x")
let conto = document.querySelector("#cont-o")

let p_x = 0;
let p_o = 0;

let resetarTd = document.querySelector("#resetar");


let gamep2 = function(){
    container.style.visibility = 'visible';
    p2.style.visibility = 'hidden';
    estrutura();
    }

p2.addEventListener('click',gamep2);


function estrutura(){
    class Div{
        constructor(num){
            this.num = num;
        }
        create(x=1){
            let numer = this.num - 1
            let name = '#div'+ this.num;
            let div = document.querySelector(name);
            if (x == 1){
           
            arraydiv.push(div);
            div.addEventListener('click', function(){
                let contador = 0;
                for(let i in array){
                    if(array[i] == 0){
                        contador = contador + 1;
                    }
                }
                        if(contador %2 == 0){
                            if(array[numer] == 0){
                                array[numer] = 2;
                                console.log('oi');
                                div.className = "red"
                                
                                
                            } 
                                                  
                        }
                        else{
                            if(array[numer] == 0){
                                array[numer] = 1
                                div.className = 'green'
                        }           
                        }
            
                    
            console.log(array)
            jogo()


            })
            }else{
                div.className = "pecas";
                array = [0,0,0,0,0,0,0,0,0]
            }
            
            
         }



    }

 


    let jogo = function(){
        if(array[0] == array[1] && array[0]== array[2] && array[0] != 0){
            if(array[0] == 1){
                alert('verdeeeeee')
                p_x += 1;
                contx.innerHTML = p_x
            }
            if(array[0] == 2){
                alert('vermelhooo')
                p_o += 1;
                conto.innerHTML = p_o
            }
            resetar()
        }
        else if(array[0] == array[4] && array[0]== array[8] && array[0] != 0){
            if(array[0] == 1){
                alert('verdeeeeee')
                p_x += 1;
                contx.innerHTML = p_x
            }
            if(array[0] == 2){
                alert('vermelhooo')
                p_o += 1;
                conto.innerHTML = p_o
            }
            resetar()
        }
        else if(array[0] == array[3] && array[0]== array[6] && array[0] != 0){
            if(array[0] == 1){
                alert('verdeeeeee')
                p_x += 1;
                contx.innerHTML = p_x
            }
            if(array[0] == 2){
                alert('vermelhooo')
                p_o += 1
                conto.innerHTML = p_o
            }
            resetar()
        }
        else if(array[1] == array[4] && array[1]== array[7] && array[1] != 0){
            if(array[1] == 1){
                alert('verdeeeeee')
                p_x += 1;
                contx.innerHTML = p_x
            }
            if(array[1] == 2){
                alert('vermelhooo')
                p_o += 1;
                conto.innerHTML = p_o
            }
            resetar()
    
        }
        else if(array[2] == array[4] && array[2]== array[6] && array[2] != 0){
            if(array[2] == 1){
                alert('verdeeeeee')
                p_x += 1;
                contx.innerHTML = p_x
            }
            if(array[2] == 2){
                alert('vermelhooo')
                p_o += 1;
                conto.innerHTML = p_o
            }
            resetar()
            }
        else if(array[2] == array[5] && array[2]== array[8] && array[2] != 0){
            if(array[2] == 1){
                alert('verdeeeeee')
                p_x += 1;
                contx.innerHTML = p_x
            }
            if(array[2] == 2){
                alert('vermelhooo')
                p_o += 1;
                conto.innerHTML = p_o
            }
            resetar()
        }
        else if(array[3] == array[4] && array[3]== array[5] && array[3] != 0){
            if(array[3] == 1){
                alert('verdeeeeee')
                p_x += 1;
                contx.innerHTML = p_x
            }
            if(array[3] == 2){
                alert('vermelhooo')
                p_o += 1;
                conto.innerHTML = p_o
            }
            resetar()
        }
        else if(array[8] == array[7] && array[8]== array[6] && array[8] != 0){
            if(array[8] == 1){
                alert('verdeeeeee')
                p_x += 1;
                contx.innerHTML = p_x
            }
            if(array[8] == 2){
                alert('vermelhooo')
                p_o += 1;
                conto.innerHTML = p_o
            }
            resetar()
        }
        else{
            let contador = 0;
            for(let i in array){
                if(array[i] != 0){
                    contador += 1
                    
                }
            
            }
            if(contador == 9){
                alert('VELHA')
                contador = 0;
                resetar()
            }
        }
    };
    let div1 = new Div(1);
    div1.create()
    let div2 = new Div(2);
    div2.create()
    let div3 = new Div(3);
    div3.create()
    let div4 = new Div(4);
    div4.create()
    let div5 = new Div(5);
    div5.create()
    let div6 = new Div(6);
    div6.create()
    let div7 = new Div(7);
    div7.create()
    let div8 = new Div(8);
    div8.create();
    let div9 = new Div(9);
    div9.create()
    

    function resetar (){
        div1.create(2)
        div2.create(2)
        div3.create(2)
        div4.create(2)
        div5.create(2)
        div6.create(2)
        div7.create(2)
        div8.create(2)
        div9.create(2)
        
    
    }
    
    
   resetarTd.addEventListener("click",function(){
       resetar();
       p_o = 0;
       conto.innerHTML = p_o
       p_x = 0;
       contx.innerHTML = p_x
    
   })
   
}
