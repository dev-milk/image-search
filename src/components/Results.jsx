const Results = ({photo}) => {
    return (
        <div className="photo-list">
            {photo.map((singleData) =>
            <a href={singleData.links.html}> 
            <img src={singleData.urls.regular} alt={singleData.alt_description} /> 
        </a>
           // <a href="#">
            //    <img src="https://source.unsplash.com/random" alt="" />
           // </a>
            )}
        </div>
    );
}
 
export default Results