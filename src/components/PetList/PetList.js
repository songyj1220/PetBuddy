import React, { useState, useEffect } from 'react';
import './PetList.css';
import Pet from "../Pet/Pet";

const PetList = (props) =>
{
    const [pageList, setPageList] = useState([]);

    useEffect(() => {
        let list = [];
        for (let number = 1; number <= props.totalPage; number++) {
            list.push(number);
        }
        setPageList(list);
      }, []);

    return(
        <div className="PetList">
            {/* <div className="contents"> */}
            {
            (props.pets !== undefined) ?

            props.pets.map((pet) => {
                return <Pet key={pet.id} pet={pet}/>;
                })


                :

                <p className="errorMessage">There was an error. Please try again.</p>
            }
            {/* </div> */}
  

            <div className="pagination">
                {
                    //pageList.length > 0 &&
                    // <p>page: {props.totalPage}</p>
                    //<div>
                    //{pageList.map(page => (
                        //<div href={null} key={page}
                            // onClick={() => onPageChange(page)}
                            // className={page === currentPage ? 'active' : 'page-item'}
                            //>
                            //{page}
                       // </div>
                    //))}
                    //</div>

                }

            </div>

        </div>
    );

};

export default PetList;