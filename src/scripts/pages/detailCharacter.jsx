import React from 'react';
import Infos from '../components/infos'
import Transition from '../components/transition';
import BackButton from '../components/back-button';
import Cover from '../components/cover';
import ScrollIndicator from '../components/scroll-indicator';
import Tilt from '../misc/tilt';
import { animateIn, enableScroll, disableScroll, coverOnLoad, infoData } from './detailsCommon';

class DetailCharacter extends React.Component {
  constructor(props) {
    super(props);
  }

  positionInfos() {
    let viewH = 0;
    if (window.innerWidth < 960) {
      viewH = innerHeight - 50;
    }

    this.refs.infos.style = `transform:translateY(${viewH}px)`;
  }

  componentDidMount() {
    this.tilt = new Tilt();
    window.onresize = () => { this.positionInfos(); };

    const content = document.querySelector('.detail__content');
    const img = content.querySelector('img');
    img.onload = () => { coverOnLoad(content, img, slides, this.positionInfos.bind(this), this.tilt); };

    let slides = [...document.querySelectorAll('.slides .first')];
    this.animateIn(slides);
  }

  componentWillUnmount() {
    window.onresize = null;
    enableScroll();
  }

  onBackButtonClick() {
    this.props.history.goBack();
  }

  animateIn(slides) {
    animateIn(slides);
  }

  hasItens(data) {
    return data.items && data.items.length;
  }

  render() {
    return (
      <div className="detail">
        <Transition />
        <div ref={'content'} className="detail__content">
          <BackButton onClick={this.onBackButtonClick.bind(this)} />
          <Cover {...this.props}/>
          <section ref={'infos'} className="detail__infos">
            <ScrollIndicator />
            <div ref={'infoName'} className="info__name">
              <h2>{this.props.selectedItem.name}</h2>
            </div>
            {infoData(this.props.selectedItem.stories, this.hasItens, 'Stories')}
            {infoData(this.props.selectedItem.series, this.hasItens, 'Series')}
          </section>
        </div>
      </div>
    );
  }
}

DetailCharacter.propTypes = {
  selectedItem: React.PropTypes.object,
  history: React.PropTypes.object
}

export default DetailCharacter;
