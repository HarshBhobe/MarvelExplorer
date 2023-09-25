

function TabComics()
{
  return(
    <div>
       <div style={{display: "flex", height: "600px",width:"1080px", padding:"71px"}}>
          <div style={{width:"25%",padding: "20px", border: "1px solid #ff0808"}}>
            SORT BY
            <br></br><br></br><br></br>
            <button type="submit">NAME</button>
            <div style={{padding:"5px"}}></div>
            <button type="submit">DATE</button>
            <div style={{padding:"5px"}}></div>
            <button type="submit">PRCIE</button>
            <div style={{padding:"5px"}}></div>
            <button type="submit">ISS.NO</button>

          </div>
          <div  style={{width:"75%",padding: "20px" , border: "1px solid #ff0808"}}>
          <div style={{width:"99%",height:"100px",padding: "3px",background:"#ff0808",borderRadius:"20px"}}>Uncanny Avengers-2006</div>
            <br></br>
            <div style={{width:"99%",height:"100px",padding: "3px",background:"#ff0808",borderRadius:"20px"}}>Dark X-MEN-2007</div>
            <br></br>
            <div style={{width:"99%",height:"100px",padding: "3px",background:"#ff0808",borderRadius:"20px"}}>Captain America-2007</div>
            <br></br>
            <div style={{width:"99%",height:"100px",padding: "3px",background:"#ff0808",borderRadius:"20px"}}>Daredevil-1996</div>
            <br></br>
            <div style={{width:"99%",height:"100px",padding: "3px",background:"#ff0808",borderRadius:"20px"}}>Star wars-1990</div>

          </div>
      </div>
      
    </div>
  )
}


export default TabComics;