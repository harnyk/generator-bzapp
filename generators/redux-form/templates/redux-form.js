import _ from 'underscore';
import classnames from 'classnames';
import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {getFormValues} from 'redux-form';
import PubSub from 'react/PubSub';
import formValidatorHOC from 'react/smartComponents/FormValidatorHOC';
import {startTracking} from 'react/actions/GlobalActions';
import {<%= formKey %> as FORM} from 'react/constants/Forms';

const validate = () => {
    return {};
}

const mapStateToProps = (state) => {
    return {
    };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
    }, dispatch);
};

let <%= formName %> = class extends Component {

    componentWillMount() {
        this.props.startTracking(FORM);
    }

    render() {
        const { initialValues } = this.props;
        if(!initialValues) {
            return null;
        }

        return (<div>
            <BZInput keyName="foo" label="Hello World" />
        </div>);
    }
}


<%= formName %> = formValidatorHOC(<%= formName %>, {
    keyName: FORM,
    validate,
    noEnter: true,
    onSubmit: async (campaign, dispatch, props) => {
    },
    onSubmitFail: (validationErrors, dispatch, apiError) => {
    },
    onSubmitSuccess: (values) => {
    }
});


export default connect(mapStateToProps, mapDispatchToProps)(<%= formName %>);
