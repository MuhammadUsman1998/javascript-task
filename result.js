window.addEventListener('load', () =>{
    const params=(new URL(document.location)).searchParams;

  
    const firstname =params.get('firstname');
    const lastname =params.get('lastname');
    const Email =params.get('Email');
    const Education =params.get('Education');
    const Skills =params.get('Skills');
    const Organization =params.get('Organization');



    document.getElementById('result-firstname').innerHTML=firstname;
    document.getElementById('result-lastname').innerHTML=lastname;
    document.getElementById('result-Email').innerHTML=Email;
    document.getElementById('result-Education').innerHTML=Education;
    document.getElementById('result-Skills').innerHTML=Skills;
    document.getElementById('result-Organization').innerHTML=Organization;

      })
















