import React from 'react';
import Infos from '../components/infos'
import Transition from '../components/transition';
import BackButton from '../components/back-button';
import ScrollIndicator from '../components/scroll-indicator';
import Tilt from '../misc/tilt';
import Cover from '../components/cover';
import { animateIn, enableScroll, coverOnLoad, disableScroll, infoData } from './detailsCommon';

class DetailComic extends React.Component {
  constructor(props) {
    super(props);
  }

  positionInfos() {
    let viewH = 0;
    if (window.innerWidth < 960) {
      viewH = window.innerHeight - 50;
    }
    this.refs.infos.style = `transform:translateY(${viewH}px)`;
  }

  componentDidMount() {
    this.tilt = new Tilt();
    this.mobile = true;

    let slides = [...document.querySelectorAll('.slides .first')];

    window.onresize = () => { this.positionInfos(); };

    const content = document.querySelector('.detail__content');
    const img = content.querySelector('img');
    img.onload = () => { coverOnLoad(content, img, slides, this.positionInfos.bind(this), this.tilt); };

    animateIn(slides);
  }

  componentWillUnmount() {
    window.onresize = null;
    enableScroll();
  }

  createMarkup(markup) {
    return { __html: markup }
  }

  onBackButtonClick() {
    this.props.history.goBack();
  }

  getDescription(description) {
    return description ? <p dangerouslySetInnerHTML={this.createMarkup(description)}></p> : '';
  }

  hasItens(data) {
    let output = false;
    if (data.items && data.items.length) {
      output = true;
    }

    return output;
  }

  render() {
    return (
      <div className="detail">
        <Transition />
        <div ref={'content'} className="detail__content" >
          <BackButton onClick={this.onBackButtonClick.bind(this)} />
          <Cover {...this.props}/>
          <section ref={'infos'} className="detail__infos">
            <ScrollIndicator />
            <div className="info__name info__name--comic">
              <h2 ref={'title'}>{this.props.selectedItem.title}</h2>
              {this.getDescription(this.props.selectedItem.description)}
            </div>
            {infoData(this.props.selectedItem.creators, this.hasItens, 'Creators')}
            {infoData(this.props.selectedItem.characters, this.hasItens, 'Characters')}
            {infoData(this.props.selectedItem.stories, this.hasItens, 'Stories')}
            {infoData(this.props.selectedItem.series, this.hasItens, 'Series')}
          </section>
        </div>

      </div>
    );
  }
}

DetailComic.propTypes = {
  selectedItem: React.PropTypes.object,
  history: React.PropTypes.object,
}

export default DetailComic;
