import axios from "axios";
import { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Spinner from "react-bootstrap/Spinner";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import { useParams } from "react-router";

function Articles() {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    console.log(useParams());

    useEffect(function () {
        axios
            .get("https://be-nc-news-ic74.onrender.com/api/articles")
            .then(({ data }) => {
                setArticles(data.articles);
                setLoading(false);
            })
            .catch(() => {
                setError(true);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return (
            <>
                <div id="articles-header">
                    <h1>All Articles</h1>
                </div>

                <Spinner />
            </>
        );
    }

    if (error) {
        return (
            <>
                <div id="articles-header">
                    <h1>All Articles</h1>
                </div>

                <Alert id="article-alert-error" variant="danger">
                    Something went wrong while trying to display the content.
                </Alert>
            </>
        );
    }

    return (
        <>
            <div id="articles-header">
                <h1>All Articles</h1>
            </div>

            <div id="articles-area">
                {articles.map((obj) => {
                    const fixedDate = new Date(obj.created_at).toLocaleString(
                        "en-GB"
                    );
                    const displayedTopic = obj.topic.split("");
                    displayedTopic[0] = displayedTopic[0].toUpperCase();

                    return (
                        <Card style={{ width: "18rem" }}>
                            <Card.Header>{obj.title}</Card.Header>
                            <Card.Img variant="top" src={obj.article_img_url} />
                            <Card.Body>
                                <Card.Title>By {obj.author}</Card.Title>
                                <Card.Text>{displayedTopic}</Card.Text>
                            </Card.Body>
                            <Button id="article-btn">View Article</Button>
                            <Card.Footer>{fixedDate}</Card.Footer>
                        </Card>
                    );
                })}
            </div>
        </>
    );
}

export default Articles;
