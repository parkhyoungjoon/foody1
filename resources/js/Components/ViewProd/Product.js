import {React, Component} from 'react';
import axios from 'axios';
import ProductPresenter from './ProductPresenter';

export default class extends Component {
    constructor(props){
        super(props);
        // const {location: {pathname}} = props;
        this.state = {
            result: null,
            loading: true,
            error: null
        };
    }

    async componentDidMount(){
        const {
            match: {params: {id}},
            history: {push}
        } = this.props;
        const parseId = parseInt(id);
        if (isNaN(parseId)) {
            return push("/");
        }
        let result= null;
        
        try {
            console.log("working");
            ({data : result } = 
                await axios.get('/api/searchProduct/',{
                    params: {
                        id: parseId
                    }
            }));
            console.log(this.state.result);
        } catch {
            this.setState({ error: "can't find anything"});
        } finally {
            this.setState({ loading: false, result: result}); 
        }
    }
    render() {
        // match -> params 에 id 값이 있고
        //          path, url값 확인 가능
        const {result ,loading, error} = this.state;
        // console.log(this.props);
        console.log(this.state);
        return (
            <ProductPresenter
                result = {result}
                loading = {loading}
                error = {error}
            />
        );
    }


}