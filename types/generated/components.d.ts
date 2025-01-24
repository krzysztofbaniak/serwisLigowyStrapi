import type { Schema, Struct } from '@strapi/strapi';

export interface EventEvent extends Struct.ComponentSchema {
  collectionName: 'components_event_events';
  info: {
    displayName: 'event';
    icon: 'hashtag';
  };
  attributes: {
    minute: Schema.Attribute.Integer;
    name: Schema.Attribute.String;
  };
}

export interface GoalsGoals extends Struct.ComponentSchema {
  collectionName: 'components_goals_goals';
  info: {
    displayName: 'goals';
    icon: 'hashtag';
  };
  attributes: {
    penalty: Schema.Attribute.Boolean;
    player: Schema.Attribute.String;
    team: Schema.Attribute.Enumeration<['home', 'away']>;
  };
}

export interface PlayersPlayers extends Struct.ComponentSchema {
  collectionName: 'components_players_players';
  info: {
    displayName: 'players';
    icon: 'hashtag';
  };
  attributes: {
    fullname: Schema.Attribute.String;
    number: Schema.Attribute.Integer;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'event.event': EventEvent;
      'goals.goals': GoalsGoals;
      'players.players': PlayersPlayers;
    }
  }
}
