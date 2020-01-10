import React from "react"

import { connect } from "react-redux"
import { getApi } from "../Actions/actions"

function Api(props) {

    return (
        <div>
    
      {props.api.map(img => 
      <div>
          <img key={img.id} src={img.image} />
      <p>{img.name}</p>
      </div>
      )}
            <button onClick={() => {
                props.getApi()
            }}>WubbaLubDub</button>


        </div>
    )
}

const mapStateToProps = state => {
    return { loading: state.loading, api: state.api };
};

export default connect(
    mapStateToProps,
    { getApi }
)(Api);
