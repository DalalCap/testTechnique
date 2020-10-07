import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import axios from 'axios';


interface IState {
    articles: any[];
}

export default class Home extends React.Component<RouteComponentProps, IState> {
    constructor(props: RouteComponentProps) {
        super(props);
        this.state = { articles: [] }
    }

    public componentDidMount(): void {
        axios.get(`https://jsonplaceholder.typicode.com/todos`).then(data => {
            this.setState({ articles: data.data })
        })
    }

    public render() {
        const articles = this.state.articles;
        return (
            <div>
                {articles.length === 0 && (
                    <div className="text-center">
                        <h2>No articles found </h2>
                    </div>
                )}

                <div className="container">
                    <div className="row">
                        <table className="table table-bordered">
                            <thead className="thead-light">
                                <tr>
                                    <th scope="col">Id</th>
                                    <th scope="col">Title</th>
                                </tr>
                            </thead>
                            <tbody>
                                {articles && articles.map(articles =>
                                    <tr key={articles.userId}>
                                        <td>{articles.id}</td>
                                        <td>{articles.title}</td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>
        )
    }
}