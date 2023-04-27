import './Hello.css';
const Hello=({Children})=>{ 
    return(<>
        <h1>Hello World 
            {Children}
            </h1>
        </>);
}
export default Hello;