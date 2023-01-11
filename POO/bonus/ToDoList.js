class ToDoList {
    
   #name;
   #NePasOublier;
   
   constructor(name, NePasOublier){
        this.#name = name;
        this.#NePasOublier = NePasOublier;
    }
    get name (){
        return this.#name;
    }

    set name (name){
        this.#name = name;
    }
    
    get NePasOublier (){
        return this.#NePasOublier;
    }

    set NePasOublier (NePasOublier){
        this.#NePasOublier = NePasOublier;
    }
    
    add()
    {
let btn = document.getElementById("btn");

btn.addEventListener("submit", function(event){  
    let textName = document.getElementById("name")
    console.log(textName);
});


btn.addEventListener("click", function(event){
    
        
              
                let ul1 = document.getElementById("ul");
                let li = document.createElement("li");
                let ul2 = document.createElement("ul");
                let li2 = document.createElement("li");
                let txt1 = document.createTextNode("${this.name}");
                let txt2 = document.createTextNode("${this.NePasOublier}");
                
                ul2.appendChild(li2);
                li2.appendChild(txt2);
                li.appendChild(txt1);
                li.appendChild(ul2);
                ul1.appendChild(li);
            
        
});
    }	
}


export { ToDoList };