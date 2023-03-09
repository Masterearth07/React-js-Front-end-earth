import React from "react";

// api for login
export const loginapi = (username, password , navigate) => {
    fetch("http://localhost:7770/personal/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            "username": username,
            "password": password
        },)
    }).then(response => {
      if (response.ok) {
        response.text().then(data => {
          navigate('/firstpage', { state: { user: data } });
          alert('Login Success')
      })
      } else if(response.status === 404){
        alert('Username or Password is inccorect');
      } else{
        alert('Login failed. Please try again.');
      }
    })
    .catch(error => {
      alert('An error occurred. Please try again later.');
    });
};

//api for register or signup
export const registerApi = (email , name , role ,username, password , setOpenPopup ) => {
    fetch("http://localhost:7770/personal/register", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            "email":email,
            "name":name,
            "role":role,
            "username": username,
            "password": password
            
        },)
      }).then(response => {
        if (response.ok) {
          alert ("Signup Success");
          setOpenPopup(false);
          // navigate('/firstpage');
        } else {
          alert('Signup failed. Please try again.');
        }
      })
      .catch(error => {
        alert('An error occurred. Please try again later.');
      });
};

//api for update use ID
export const updateApi = (email , name , role ,username, password , id , setOpenPopup) => {
    fetch("http://localhost:7770/personal/update/"+id, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            "email":email,
            "name":name,
            "role":role,
            "username": username,
            "password": password
            
        },)
      }).then(response => {
        if (response.ok) {
          alert ("Update Success");
          setOpenPopup(false);
          // navigate('/firstpage');
        } else {
          alert('Update failed. Please try again.');
        }
      })
      .catch(error => {
        alert('An error occurred. Please try again later.');
      });
};


//api for delete use ID
export const deleteByIdApi = (id , navigate) => {
    fetch("http://localhost:7770/personal/delete/"+id, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        },
      })
      .then(response => {
        if (response.ok) {
          alert ("Deleted Success");
          navigate('/');
        } else {
          alert('Failed to delete Please try again.');
        }
      })
      .catch(error => {
        alert('An error occurred. Please try again later.');
      });
};

