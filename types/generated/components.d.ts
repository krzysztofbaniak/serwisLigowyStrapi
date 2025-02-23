import type { Schema, Struct } from '@strapi/strapi';

export interface EventEvent extends Struct.ComponentSchema {
  collectionName: 'components_event_events';
  info: {
    description: '';
    displayName: 'event';
    icon: 'hashtag';
  };
  attributes: {
    minute: Schema.Attribute.Integer;
    name: Schema.Attribute.String;
    team: Schema.Attribute.Enumeration<['home', 'away']>;
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
    description: '';
    displayName: 'players';
    icon: 'hashtag';
  };
  attributes: {
    fullname: Schema.Attribute.String;
    number: Schema.Attribute.Integer;
    starter: Schema.Attribute.Boolean;
  };
}

export interface StageStage extends Struct.ComponentSchema {
  collectionName: 'components_stage_stages';
  info: {
    displayName: 'stage';
    icon: 'filter';
  };
  attributes: {
    match: Schema.Attribute.Relation<'oneToOne', 'api::match.match'>;
    next: Schema.Attribute.Relation<'oneToOne', 'api::match.match'>;
    rematch: Schema.Attribute.Relation<'oneToOne', 'api::match.match'>;
  };
}

export interface TableTable extends Struct.ComponentSchema {
  collectionName: 'components_table_tables';
  info: {
    description: '';
    displayName: 'table';
    icon: 'bulletList';
  };
  attributes: {
    concededGoals: Schema.Attribute.Integer;
    draws: Schema.Attribute.Integer;
    loses: Schema.Attribute.Integer;
    matches: Schema.Attribute.Integer;
    points: Schema.Attribute.Integer;
    scoredGoals: Schema.Attribute.Integer;
    team: Schema.Attribute.Relation<'oneToOne', 'api::team.team'>;
    wins: Schema.Attribute.Integer;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'event.event': EventEvent;
      'goals.goals': GoalsGoals;
      'players.players': PlayersPlayers;
      'stage.stage': StageStage;
      'table.table': TableTable;
    }
  }
}
