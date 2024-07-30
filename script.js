

function addTransaction(){


    const type = document.querySelector("select").value;
    const name = document.querySelector("#name").value;
    const amount = document.querySelector("#amount").value;

  


    if(type==""){
        alert("Enter some Type");
        return false
    }
    if(name==""){
        alert("Enter name");
        return false
    }
    if(amount==""){
        alert("Enter amount");
        return false
    }


    const all= document.querySelector(".all");

    const f=document.createElement('DIV');
    f.classList.add("table")


    const t=document.createElement('DIV');
    t.classList.add('con')

    const tp=document.createElement('P')
    tp.innerText=`${type}`;

    const n=document.createElement('DIV');
    n.classList.add('con')

    const np=document.createElement('P')
    np.innerText=`${name}`;


    const a=document.createElement('DIV');
    a.classList.add('con')

    const ap=document.createElement('P')
    ap.innerText=`${amount}`;

    const button=document.createElement('BUTTON');
    button.innerText=`Delete`;
    button.addEventListener("click",()=>{
        all.removeChild(f)
    })
    button.classList.add("delete")



    t.append(tp);
    n.append(np);
    a.append(ap);

    f.append(t)
    f.append(n)
    f.append(a)
    f.append(button)

    all.append(f)


}




