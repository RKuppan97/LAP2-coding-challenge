//const Post = require('/Users/Adil/Desktop/Employment/Futureproof (LFA)/Training/LAP_2/W6/LAP2-coding-challenge/api/models/post.js');

const btn = document.querySelector('#publish')
btn.addEventListener("click", e => {
    
    console.log(e.target)
    e.preventDefault();
    console.log('button clicked')
    const title = document.querySelector('#title').value
    const name = document.querySelector('#name').value
    const body = document.querySelector('#body').value
    submitPost(title,name,body)
    console.log('submitted post')
  })

function submitPost(t,n,b){
  //e.preventDefault();

  const postData = {
      title: t,
      name: n,
      body: b
  };
  console.log(postData)//working up to here
  const options = { 
      method: 'POST',
      body: JSON.stringify(postData),
      headers: { "Content-Type": "application/json" }
  };
  console.log(options)

  fetch('http://localhost:8000/posts', options)
      .then(r => r.json())
      //.then(create) - not needed?
      .then(console.log)
      .then(() => e.target.reset())
      .catch(console.warn)
  
  //alert("You're post has been saved!")
};
