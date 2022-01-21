let url = "https://docs.google.com/spreadsheets/d/1Y1NwSKAk_c-C4vGgSCPj4fVwfbDZZp5VX-AtJPGsbeE/gviz/tq?";
const output = document.querySelector('.output');
const query = encodeURIComponent('Select C');
console.log(query);
url = url + '&tq=' + query;
fetch(url)
.then(res => res.text())
.then(rep =>{
    //console.log(rep);
    const data = JSON.parse(rep.substring(47).slice(0, -2));
    const row = document.createElement('tr');

    output.append(row);
    data.table.cols.forEach((heading) => { 
        const cell = document.createElement('td');
        cell.textContent = heading.label;
        row.append(cell);
    });
    data.table.rows.forEach((main) => { 
        const container = document.createElement('tr');
    output.append(container);
       // console.log(main.c);
        main.c.forEach((ele)=>{
            const cell = document.createElement('td');
            cell.textContent = ele.v;
            container.append(cell);
        })
        
    });
   // console.log(data);
})
const Quiz = () => {
    return (
        
        <table className= "output"></table>
        
    
    )
}
        
export default Quiz
