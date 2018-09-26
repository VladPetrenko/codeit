

  const postForm = (url) => {
    const formData = new FormData(document.getElementById('fetchForm'));
  
    return fetch(url, {
      method: 'POST',
      headers: {  
        "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"  
      },
      body: formData,
    })
    .then(res => {
      if (res.ok) {
        return res.json();
      } else {
        return Promise.reject({ status: res.status, statusText: res.statusText });
      }
    })

  }
addEventListener('click', postForm('http://codeit.pro/codeitCandidates/serverFrontendTest/user/registration')
.then(data => console.log(data))
//.then(() => Response.redirect(document.location.href='./main.html'))
.catch(error => console.error(error)))
  

