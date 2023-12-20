import React from "react"

const Head = () => {
  return (
    <>
      <section className='head'>
        <div className='container d_flex'>
          <div className='left row'>
            <i className='fa fa-phone'></i>
            <label> +7 747 840 60 80 </label>
            <i className='fa fa-envelope'></i>
            <label> bekseit.03@gmail.com </label>
          </div>
          <div className='right row RText'>
            <i class="fa fa-info-circle" aria-hidden="true"></i>
            <label>FAQ</label>
            <i class="fa fa-plus-square" aria-hidden="true"></i>
            <label>Help</label>
            <i class="fa fa-language"></i>
            <label>EN</label>
            <i class="fa fa-usd" aria-hidden="true"></i>
            <label>USD</label>
          </div>
        </div>
      </section>
    </>
  )
}

export default Head
