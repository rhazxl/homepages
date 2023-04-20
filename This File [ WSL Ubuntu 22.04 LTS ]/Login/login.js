document.querySelector('[action="click_1"]').addEventListener("click", () => {
    form.append("ids", "Test")
    form.append("type", "anoynimus")
    axios.post("https://post-data-mzea.vercel.app/data-test", form).then(z => {
      console.log(z.data)
    }).catch(z => {
      alert(z.message)
    })
  })
  
