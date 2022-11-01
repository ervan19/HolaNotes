import React from "react";
import { useParams } from "react-router-dom";
import DetailBtn from "../components/button/DetailBtn";
import { getNote } from "../utils/api";
import { showFormattedDate } from "../utils/local-data";
import PropTypes from "prop-types";
import Loading from "../components/Loading";
import parser from "html-react-parser";
import NotFound from "./NotFound";

export default function DetailNotesWrapper() {
  const { id } = useParams();

  return <DetailNotes id={id} />;
}

class DetailNotes extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: null,
      isLoading: true,
    };
  }

  async componentDidMount() {
    const notes = await getNote(this.props.id);
    this.setState(() => {
      return {
        notes: notes.data,
        isLoading: false,
      };
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.notes !== this.state.notes) {
      this.setState(() => {
        return {
          notes: this.state.notes,
        };
      });
    }
  }

  render() {
    if (this.state.isLoading) {
      return <Loading />;
    }
    return (
      <>
        {this.state.notes === null ? (
          <NotFound />
        ) : (
          <section className="detail-notes">
            <article>
              <h1 className="detail-title">{this.state.notes.title}</h1>
              <span className="detail-id">({this.state.notes.id})</span>
              <p className="detail-date">
                Dibuat pada :
                <span>{showFormattedDate(this.state.notes.createdAt)}</span>
              </p>
              <p className="detail-body">{parser(this.state.notes.body)}</p>
            </article>
            <DetailBtn notes={this.state.notes} />
          </section>
        )}
      </>
    );
  }
}

DetailNotes.propTypes = {
  id: PropTypes.string.isRequired,
};
