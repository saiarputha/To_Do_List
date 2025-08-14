var t=document.getElementById("r")
            var i=document.getElementById("rg")


            function add(){
                var a=document.createElement("li")
                a.innerHTML=i.value+"<button onclick='dele(event)'>delete</button>"
                t.append(a)
               
            
            }
            
            
            function dele(event){
               event.target.parentElement.remove()

            }