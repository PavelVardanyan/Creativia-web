import React, { Component, Fragment } from 'react';
// import TreeMenu from 'react-simple-tree-menu';
import Button from "../UI/Button/Button";
import Collapsible from 'react-collapsible';



export default class Home extends Component {
    state = {
        randomPhotos: [<img src="../Image/1.jpg"/>,<img src="../Image/2.jpg"/>,<img src="../Image/3.jpg"/>,
        <img src="../Image/4.jpg"/>,<img src="../Image/5.jpg"/>,<img src="../Image/6.jpg"/>,<img src="../Image/7.jpg"/>,
        <img src="../Image/8.jpg"/>],
        menu: [

            "Home",
            "About us",
            "Portfolio",
            "Clients",
            "Team",
            "Services",
            "Blog",
            "Contact",
        ],
        ProtfolioMenu: [
            {
                title: "All+",
                onCLick: this.onClick
            },
            {
                title: "Illustrations",
                onCLick: this.onClick
            },
            {
                title: "Digital Art",
                onCLick: this.onClick
            },
            {
                title: "Web Design",
                onCLick: this.onClick
            },
        ],

    }

    onClicker = (e) => {
        e.preventDefault();
        let temp = [...this.state.randomPhotos];
        for (let i = 1; i < this.state.randomPhotos.length; i++){
            temp[i] = Math.floor(Math.random()*8);
        }
        this.setState({randomPhotos: [...temp]});
        debugger;
    };
    portfolio = this.state.randomPhotos.map((ph) => {
        return <p className="photo">{ph}</p>;
    });

    componentDidUpdate(prevProps, prevState, snapshot) {
        this.portfolio = this.state.randomPhotos.map((ph) => {
            return <p className="photo">{ph}</p>;
        });
        debugger;
    }

    render() {
        let gg = <i className="GG">GUGegfikwejfbw</i>
        let menuItems = this.state.menu.map((item)=>(<Button title={item} onClicker={() => 1} areLink={true}></Button>))
        let ProtfolioMenuItems = this.state.ProtfolioMenu.map((item)=>(<Button title={item.title} onClicker={this.onClicker.bind(this)} areLink={false}> </Button>))

        return (
            <Fragment>
            <div className="all-in">
            <nav className="navbar">
             <div className="logo">
             <h1 className="logo-title">
                 creativia
             </h1>
             </div>
             <ul className="nav-button">
               {menuItems}
             </ul>
             </nav>
             <div className="center">
                 <h1 className="center-title">
                     why <span className="title-color">creativia?</span>
                 </h1>
                 <p className="center-text">
                 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt consectetur necessitatibus,
                  alias nulla neque iure dolorum, aperiam maxime, deleniti in, a itaque! Quis cumque natus, quos, 
                  minus aspernatur aliquam, distinctio nisi hic nulla ex quidem aut maxime perspiciatis. 
                  Dolorum possimus culpa laudantium temporibus nemo non similique voluptas nesciunt autem, vitae.
                 </p>
                 <button className="center-button"> 
                    features
                 </button>
                 <button className="center-button">
                    free psd
                 </button>
             </div>
             </div>
             <div className="second-page">
                  <h1 className="second-title">
                      about <span className="title-color2">creativia</span>
                  </h1>
                  <p className="head-text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                  Dolore tempora ratione nemo rem expedita minima deserunt 
                  dolor voluptatem harum. Veritatis, saepe.
                  </p>
                  <div className="all-div">
                  <div className="menu-div">




                  <Collapsible trigger="Who is creativia">
             
             <p className="menu-text">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit soluta ratione
                      similique omnis, veniam numquam iste! Iure, blanditiis, fuga. Quas aut atque
                      placeat vitae voluptas dignissimos ratione pariatur corrupti deserunt quia, 
                      reprehenderit, assumenda nisi delectus velit, adipisci, tenetur quidem! Possimus.
                      </p>
                </Collapsible>





                <Collapsible trigger="Experiences">
             
             <p className="menu-text">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit soluta ratione
                      similique omnis, veniam numquam iste! Iure, blanditiis, fuga. Quas aut atque
                      placeat vitae voluptas dignissimos ratione pariatur corrupti deserunt quia, 
                      reprehenderit, assumenda nisi delectus velit, adipisci, tenetur quidem! Possimus.
                      </p>
                </Collapsible>




                <Collapsible trigger="Learn More">
             
             <p className="menu-text">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit soluta ratione
                      similique omnis, veniam numquam iste! Iure, blanditiis, fuga. Quas aut atque
                      placeat vitae voluptas dignissimos ratione pariatur corrupti deserunt quia, 
                      reprehenderit, assumenda nisi delectus velit, adipisci, tenetur quidem! Possimus.
                      </p>
                </Collapsible>
                </div>
            
     
                  <div className="div-image"></div>
             </div>

                  </div>
                  <header className="section-3">
                  <nav className="navbar-2">
                  <h1 className="section3-title">
                      portfolio
                  </h1>



                  <ul className="nav-button2">
                        {ProtfolioMenuItems}
                  </ul>

                  </nav>
                  </header>
                  <section>
                      <div className="show">
                          {this.portfolio}
                      </div>
                  <table className="show">
                        <tr>
                          <td  className="table-img1"></td>
                          <td className="table-img2"></td>
                          <td className="table-img3"></td>
                          <td className="table-img4"></td>
                        </tr>       
                  </table>
                  <table className="show"> 
                        <tr>          
                          <td className="table-img5"></td>
                          <td className="table-img6"></td>
                          <td className="table-img7"></td>
                          <td className="table-img8"></td>     
                      </tr> 
                  </table>
                  </section>
                  <footer>

                  </footer>
                  <div className="section-4">
                  <h1 className="section4-title">
                  our <span className="title-color2">product features</span>
                  </h1>
                  <p className="head-text2"> Lorem ipsum dolor sit amet,
                   <span className="title-color2"> consectetur adipisicing </span>elit. 
                  Dolore tempora ratione nemo rem expedita minima deserunt 
                  dolor  saepe.</p>

                  </div>
                  <ul className="section4-ul">
                     <li className="section4-li">unlimited color options &#10004;</li>
                      <li className="section4-li">outstanding support &#10004;</li>
                      <li className="section4-li">retina ready &#10004;</li>
                  </ul>
                  <div className="section4-img">

                  </div>
                  <ul className="section4-ul2">
                     <li className="section4-li2">unlimited color options &#10004;</li>
                      <li className="section4-li2">outstanding support &#10004;</li>
                      <li className="section4-li2">retina ready &#10004;</li>
                  </ul>
                  <div className="section4-down">
                  <div className="down-text">
                  <h1 className="down-title">
                      our <span className="title-color2">clints</span>
                  </h1>
                  <p className="down-text2"> Lorem ipsum dolor sit amet,
                   <span className="title-color2"> consectetur adipisicing </span>elit. 
                  Dolore tempora ratione nemo rem expedita minima deserunt 
                  dolor  saepe.</p>
                  <div className="all-center-div">
                  <div className="down-center-div">
                  <div className="flex-items">
                  <div>
                  <h1 className="down-center-title">
                      happy clients day
                  </h1>
                     <p className="down-center-text">
                     Lorem ipsum dolor sit amet, 
                     consectetur adipisicing elit. Ea veniam maiores 
                     
                     </p>
                     <div className="down-center-img">
                     

                     </div>
                     <h3>steve jobs</h3>
                     </div>
                     <div className="down-center-table">
                       <table className="down-show">
                           <tr>
                               <td className="down-table">
                               <h1 className="down-table-title">Lorem</h1>
                               </td>
                               <td className="down-table">
                               <h1 className="down-table-title">Lorem</h1>
                               </td>

                           </tr>
                           <tr>
                               <td className="down-table">
                               <h1 className="down-table-title">Lorem</h1>
                               </td>
                               <td className="down-table">
                               <h1 className="down-table-title">Lorem</h1>
                               </td>
                           </tr>
                       </table>
                     </div>
</div>
                  </div>

                  </div>
                  

                  </div>
                  </div>
                  <div className="section-5">
                  <h1 className="down-title">our <span className="title-color2"> services</span></h1>
                  <p className="down-text2">
                  Lorem ipsum dolor sit amet
                  <span className="title-color2"> consectetur adipisicing </span>elit. 
                  Dolore tempora ratione nemo rem expedita minima deserunt 
                  dolor  saepe.</p>
                  <table className="section5-table">
                      <tr>
                          <td className="section5-td">
                              <h2 className="section5-table-title1">&#8602; devolpment</h2>
                              <div className="section5-table-div">
                              <p className="section5-table-text">
                              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique cumque,
                              obcaecati consequatur, eum deserunt quisquam. Repellendus dolores quod officia
                              rerum consequatur voluptas dicta minus. Repellat est obcaecati cum vitae porro?
                              </p>
                              </div>
                          </td>
                          <td className="section5-td">
                          <h2 className="section5-table-title2"> &#8808; html/css</h2>
                          <div className="section5-table-div">
                          <p className="section5-table-text">
                              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique cumque,
                              obcaecati consequatur, eum deserunt quisquam. Repellendus dolores quod officia
                              rerum consequatur voluptas dicta minus. Repellat est obcaecati cum vitae porro?
                              </p>
                          </div>
                          </td>
                      </tr>
                      <tr>
                          <td className="section5-td">
                              <h2 className="section5-table-title3"> &#10162; wordpress</h2>
                              <div className="section5-table-div">
                              <p className="section5-table-text">
                              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique cumque,
                              obcaecati consequatur, eum deserunt quisquam. Repellendus dolores quod officia
                              rerum consequatur voluptas dicta minus. Repellat est obcaecati cum vitae porro?
                              </p>
                              </div>
                          </td>
                          <td className="section5-td">
                              <h2 className="section5-table-title4"> &#127922; applications</h2>
                              <div className="section5-table-div">
                              <p className="section5-table-text">
                              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique cumque,
                              obcaecati consequatur, eum deserunt quisquam. Repellendus dolores quod officia
                              rerum consequatur voluptas dicta minus. Repellat est obcaecati cum vitae porro?
                              </p>
                              </div>
                          </td>
                      </tr>
                      <tr>
                          <td className="section5-td">
                              <h2 className="section5-table-title5"> &#9998; ui/ux design</h2>
                              <div className="section5-table-div">
                              <p className="section5-table-text">
                              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique cumque,
                              obcaecati consequatur, eum deserunt quisquam. Repellendus dolores quod officia
                              rerum consequatur voluptas dicta minus. Repellat est obcaecati cum vitae porro?
                              </p>
                              </div>
                          </td>
                          <td className="section5-td">
                              <h2 className="section5-table-title6">&#9736; reponsive layout</h2>
                              <div className="section5-table-div">
                              <p className="section5-table-text">
                              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique cumque,
                              obcaecati consequatur, eum deserunt quisquam. Repellendus dolores quod officia
                              rerum consequatur voluptas dicta minus. Repellat est obcaecati cum vitae porro?
                              </p>
                              </div>
                          </td>
                      </tr>

                  </table>
                  </div>
                  <h1 className="second-title">
                  Plans <span className="title-color2">Bestseller</span>
                  </h1>
                  <p className="head-text2">
                  Lorem ipsum dolor sit amet
                  <span className="title-color2"> consectetur adipisicing </span>elit. 
                  Dolore tempora ratione nemo rem expedita minima deserunt 
                  dolor  saepe.</p>
                  <table className="section6-table">
                    <tr>
                        <td className="section6-center">
                        <div className="section6-center-div">
                           <header className="section6-title-head">
                           <h2 className="section6-table-title">reseller</h2>
                           <div className="table-center-div2">
                           <h1 className="section6-table-title2">
                           199$ <sub>year</sub>
                           </h1>
                           </div>
                           <ul className="section6-list">
                              <li className="section6-li">CPU E3-1230 3.3GHz 8MB V2</li>
                               <li className="section6-li">HARD 500GB SATA 7200RPM</li>
                               <li className="section6-li">RAM 8GB DDR3 1333MHZ ECC</li>
                               <li className="section6-li">Traffic 10 TB</li>
                               <li className="section6-li">Connection 100MB</li>
                               <li className="section6-li">5IP</li>
                           </ul>
                           </header>
                           <button className="section6-button">order now</button>
                        </div>
                        </td>
                        <td className="section6-center">
                        <div className="section6-center-div">
                           <header className="section6-title-head">
                           <h2 className="section6-table-title">
                           reseller
                           </h2>
                           <div className="table-center-div2">
                           <h1 className="section6-table-title2">
                           199$ <sub>year</sub>
                           </h1>
                           </div>
                           <ul className="section6-list">
                              <li className="section6-li">CPU E3-1230 3.3GHz 8MB V2</li>
                               <li className="section6-li">HARD 500GB SATA 7200RPM</li>
                               <li className="section6-li">RAM 8GB DDR3 1333MHZ ECC</li>
                               <li className="section6-li">Traffic 10 TB</li>
                               <li className="section6-li">Connection 100MB</li>
                               <li className="section6-li">5IP</li>
                           </ul>
                           </header>
                           <button className="section6-button">order now</button>
                        </div>
                        </td>
                        <td className="section6-center">
                        <div className="section6-center-div">
                           <header className="section6-title-head">
                           <h2 className="section6-table-title">reseller</h2>
                           <div className="table-center-div2">
                           <h1 className="section6-table-title2">
                           199$ <sub>year</sub>
                           </h1>
                           </div>
                           <ul className="section6-list">
                              <li className="section6-li">CPU E3-1230 3.3GHz 8MB V2</li>
                               <li className="section6-li">HARD 500GB SATA 7200RPM</li>
                               <li className="section6-li">RAM 8GB DDR3 1333MHZ ECC</li>
                               <li className="section6-li">Traffic 10 TB</li>
                               <li className="section6-li">Connection 100MB</li>
                               <li className="section6-li">5IP</li>
                           </ul>
                           </header>
                           <button className="section6-button">order now</button>
                        </div>
                        </td>
                        <td className="section6-center">
                        <div className="section6-center-div">
                           <header className="section6-title-head">
                           <h2 className="section6-table-title">reseller</h2>
                           <div className="table-center-div2">
                           <h1 className="section6-table-title2">
                           199$ <sub>year</sub>
                           </h1>
                           </div>
                           <ul className="section6-list">
                              <li className="section6-li">CPU E3-1230 3.3GHz 8MB V2</li>
                               <li className="section6-li">HARD 500GB SATA 7200RPM</li>
                               <li className="section6-li">RAM 8GB DDR3 1333MHZ ECC</li>
                               <li className="section6-li">Traffic 10 TB</li>
                               <li className="section6-li">Connection 100MB</li>
                               <li className="section6-li">5IP</li>
                           </ul>
                           </header>
                           <button className="section6-button">order now</button>
                        </div>
                        </td>
                    </tr>
                  </table>
                  <h1 className="second-title">
                  Find us <span className="title-color2">here</span>
                  </h1>
                  <p className="head-text2">
                  Lorem ipsum dolor sit amet
                  <span className="title-color2"> consectetur adipisicing </span>elit. 
                  Dolore tempora ratione nemo rem expedita minima deserunt 
                  dolor  saepe.</p>
                  <div className="section7-div">
                   <div className="input-div">
                     <h1 className="input-title">
                        send message
                     </h1>
                     <input type="name" placeholder="Name"></input>
                     <input type="email" placeholder="Email"></input>
                     <input type="subject" placeholder="Subject"></input>
                     <textarea></textarea>
                     <button className="submit">Submit</button>
                   </div>
                  </div>
                 
              </Fragment>
         
         
        )
    }
}
