 

export default function ShowArticlePage(props) {
    console.log(props)
  return (
    <div>
      <h3>ShowArticlePage</h3>
      <h4>{props.params.title}</h4>
    </div>
  );
}
