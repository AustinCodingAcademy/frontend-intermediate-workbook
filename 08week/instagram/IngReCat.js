'use strict';
// mashape's spoonacular api key -H 'X-Mashape-Key: YmReyxlVdYmshU5Dlyo9XYbBPZtep1KJPXujsnt4Hiueq8H23o' \
class IngReCat extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        recipes: [],
        ingredients: '',
        ing: [],
        menu: []
      }
    }
    render() {
      // const ingredients =this.state.people.map((ing)=>{
      return (
        <IngForm />

        );
      };
    }

  class IngForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        value: ''
      };

      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      //this.getRecipes = this.getRecipes.bind(this);
      }

      handleChange(event) {
        this.setState({
          value: event.target.value
        });
        console.log(this.state.value);
      }
      handleSubmit(event) {
        event.preventDefault();

        this.state.ingredients = this.state.value.split(',');
        this.state.ing = this.state.ingredients.map(x => x.trim());;
        console.log(this.state.ingredients[0]);
        // console.log(ing.length);
        // console.log(ing[2]);
        //ing[0] = "apples";
        this.getRecipes();


      //Form Works, fetch works....putting it together
      //  this.getRecipes();
      }
//"https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/findByIngredients?fillIngredients=false&ingredients=apples%2Cflour%2Csugar&limitLicense=false&number=5&ranking=1"
      getRecipes() {
        let ing = this.state.ing;
        let baseUrl = "https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/findByIngredients?fillIngredients=false&ingredients=";
        //apples%2Cflour%2Csugar
        let endUrl = "&limitLicense=false&number=5&ranking=1";
        fetch(baseUrl+ing[0]+endUrl, {
          method: "GET",
          // body: JSON.stringify(data),
          headers: {
            Accept: "application/json",
            "X-Mashape-Key": "YmReyxlVdYmshU5Dlyo9XYbBPZtep1KJPXujsnt4Hiueq8H23o",
            //  "Content-Type": "application/json"
            }}).then((response) => {
              console.log(response);
              return response.json().then((data) => {
                console.log(data);
                this.setState({

                  recipes: data
            // .map(recipe =>{
            //   return recipe;
          }
            );

          // let results = this.state.recipes.map(rec => {
          //   return <div > < img src = {rec.image}/><p>{rec.title}</p >< /div>;
            });
          });
        }

      render(){
        try{
          this.state.menu = this.state.recipes.map((rec)=>{
            return(<div key={rec.id}>
                     <p>{rec.title}</p>
                        <img src={rec.image} />
                    </div>);
                  })}
        catch(e){
          this.state.recipes = <p>"No menu yet"</p>
        }

        return (

          <div>
            <h1> Enter Your Ingredients < /h1>
              <form onSubmit = {this.handleSubmit} >
                <label > Ingredients:
                  <input type = "text" value = {this.state.value}  onChange = {this.handleChange} />
                </label>
                <input type = "submit" value = "Submit" />
                </form>

            <div>{this.state.menu}</div>
            </div>
              );
        }
      }











    // class RecipeResults extends React.Component {
    //   constructor(props){
    //     super(props);
    //     this.state ={
    //       results: this.state.recipes
    //       }
    //     }
    //
    //     render(){
    //       this.state.results.map(rec => {
    //         let name = rec.title;
    //         let pic = rec.image;
    //
    //         return(
    //           <div>
    //             <ul>
    //              <li> {rec.title}</li>
    //              <li>{rec.image}</li>
    //             </ul>
    //           </div>
    //       );});
    //
    //     }
    //
    // }

    //   submitForm(e) {
    //     event.preventDefault();
    //
    //   }
    //   render() {
    //     return (
    //       <form onSubmit ={this.submitForm.bind(this)}>
    //       <input />
    //       <button type="submit">Submint</button>
    //       </form>
    //     )}



    ReactDOM.render( < IngReCat / > , document.querySelector('#fetch'));
    // ReactDOM.render(<RecipeResults />, document.querySelector('#results'));
