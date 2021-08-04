function CreatNewCard(){

    const name1=document.querySelector(".name");
    const profession=document.querySelector(".profession");
    const email=document.querySelector(".E-mail");
    let myArray=[];
    
    let info={
        Name:name1.value,
        Profession:profession.value,
        Email:email.value
    }
    myArray.push(info);
    
    for(let i=0;i<myArray.length;i++){
    
        const myclass=document.querySelector(".container");
    
        let div=document.createElement('div');
        div.className='newCard';
        myclass.appendChild(div);
    
        const Delete=document.createElement("button");
        Delete.innerHTML=('x');
        Delete.className="deletbutoon";
        Delete.id="id"+i;
        div.appendChild(Delete);
    
        const pName=document.createElement('p');
        pName.innerHTML='Name:'+' '+myArray[i].Name;
        // localStorage.setItem("name",'Name:'+' '+myArray[i].Name);
        // localStorage.getItem("name");
        div.appendChild(pName);
    
        const y=myArray[i].Profession;
    
        
        if(y.search('official')!==-1){
        myArray[i].Profession=' ';
        const pProfession=document.createElement('p');
        pProfession.innerHTML='Profession:'+' '+myArray[i].Profession;
        // localStorage.setItem("professionnull",+'Profession:'+' ');
        // localStorage.getItem("professionnull");
    
        div.appendChild(pProfession);
        }else{
        const pProfession=document.createElement('p');
        pProfession.innerHTML='Profession:'+' '+myArray[i].Profession;
        // localStorage.setItem("profession",'Profession:'+' '+myArray[i].Profession);
        // localStorage.getItem("profession");
        div.appendChild(pProfession);
        }
    
    
        const x=myArray[i].Email;
        const atposition=x.indexOf('@');
    
        if(atposition<1){
        const pEmail=document.createElement('p');
        myArray[i].Email='valid@gmail.com';
        pEmail.innerHTML='Email:'+' '+myArray[i].Email;
        // localStorage.setItem("emailvalid",'Email:'+' '+'valid@gmail.com');
        // localStorage.getItem("emailvalid");
        div.appendChild(pEmail);
    }else{
        const pEmail=document.createElement('p');
        pEmail.innerHTML='Email:'+' '+myArray[i].Email;
        // localStorage.setItem("email",'Email:'+' '+myArray[i].Email);
        // localStorage.getItem("email");
        div.appendChild(pEmail);
    
    }
    localStorage.NewCard=JSON.stringify(myArray[i]);
   

    }
    empt();
    // const stored=JSON.parse(localStorage.NewCard);
    // document.querySelector('.newCard').innerHTML=stored;
}
    function empt(){
    document.querySelector(".name").value='';
    document.querySelector(".profession").value='';
    document.querySelector(".E-mail").value='';
    }
    // document.querySelector('.newCard').addEventListener('click',(e)=>{
    
    // 
    
    //   function GFG_click() {
    //     var gfg_down =
    //     document.querySelector("#id0");
    //     gfg_down.remove();
    // }