
const ReviewsItem = ({datareviews}) => {
    const element = datareviews.map(({ author, content, id }) => (
        <li id={id} key={id}><h3>{author}</h3><p>{content}</p></li>
    ));

    return (
        <ul>{element}</ul>
    )
}

export default ReviewsItem;