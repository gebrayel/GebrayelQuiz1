let micanvas=document.getElementById('grafica').getContext('2d');
            var chart= new Chart(micanvas, {
                
                type:"polarArea",
                data:{
                    labels:['PYTHON','JAVA','HTML','CSS','JAVASCRIPT','OCTAVE','ENGLISH', 'ADOBE XD', ],
                    datasets:[
                        {
                            label:"SKILLS",
                            backgroundColor:["blue", "rgb(190,134,2)", "red","gray","green","yellow","violet","brown","white","rgb(190,134,2.0)"],
                            data:[90,80,70,70,65,40,95,65,0]
                        }
                    ]
                },
                options: {
                    title: {
                      display: true,
                      text: "DOMINIO DE SKILLS POR TOPICOS"
                    }
                    
                  }
            });