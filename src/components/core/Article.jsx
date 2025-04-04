import axios from "axios";
import { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Spinner from "react-bootstrap/Spinner";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import { useParams } from "react-router";

function Article() {
    const [article, setArticle] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    const { article_id } = useParams();

    useEffect(function () {
        axios
            .get(
                `https://be-nc-news-ic74.onrender.com/api/articles/${article_id}`
            )
            .then(({ data }) => {
                setArticle(data.article[0]);
                setLoading(false);
            })
            .catch((err) => {
                setError(true);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return (
            <>
                <Spinner />
            </>
        );
    }

    if (error) {
        return (
            <>
                <Alert id="article-alert-error" variant="danger">
                    Something went wrong while trying to display the content.
                </Alert>
            </>
        );
    }

    const fixedDate = new Date(article.created_at).toLocaleString("en-GB");
    const displayedTopic = article.topic.split("");
    displayedTopic[0] = displayedTopic[0].toUpperCase();

    return (
        <>
            <div id="article-card">
                {
                    <Card>
                        <Card.Header id="article-card-header">
                            <Card.Img src={article.article_img_url}></Card.Img>
                        </Card.Header>
                        <Card.Body>
                            <Card.Title id="article-card-title">
                                {article.title}
                            </Card.Title>
                            <Card.Title>
                                {article.author}&ensp;—&ensp;{fixedDate}
                                &ensp;—&ensp;{displayedTopic}
                            </Card.Title>
                            <Card.Text id="article-card-text">
                                {article.body}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                }
            </div>
        </>
    );
}

export default Article;
