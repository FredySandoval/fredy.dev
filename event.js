function change(){
    let x = document.querySelector('.email').value
    let y = document.querySelector('.update').innerHTML 

    if (x == "" || x == null || y !== "Valid Email!") {
        alert("An email address is required!");
        return false;
      } else {
        let email = document.querySelector('.email').value;
        sending(email);

      }

}

const sending = async (email) => {
  const emailaddress = { username: email };
  const options = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(emailaddress)
  }

  const emailresponse = await fetch('http://me.fredy.dev/api', options)
  const emailjson = await emailresponse.json();
  console.log(emailjson.receive + " to " + emailaddress.username);
  if(emailresponse){
    document.querySelector('button').disabled = true;
    document.querySelector('.button').textContent = 'SENT OK';
    document.querySelector('button').style.color = 'black';
    document.querySelector('button').style.backgroundColor = 'rgba(0, 255, 0, .6'
    document.querySelector('.success').innerText = emailjson.receive + " to " + emailaddress.username;

  }
}
