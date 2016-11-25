import alt from '../alt';
// It is an instance of Alt which instantiates Flux dispatcher and provides methods for creating Alt actions and stores
class FooterActions {
  constructor() {
    this.generateActions(
      'getTopCharactersSuccess',
      'getTopCharactersFail'
    );
  }

  getTopCharacters() {
    $.ajax({ url: '/api/characters/top' }) //uses jQuery to fetch data
      .done((data) => {
        this.actions.getTopCharactersSuccess(data) //notifies store that the action was successful 
      })
      .fail((jqXhr) => {
        this.actions.getTopCharactersFail(jqXhr)
      });
  }
}

export default alt.createActions(FooterActions);