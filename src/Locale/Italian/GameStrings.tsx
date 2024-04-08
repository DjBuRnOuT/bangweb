import { GameStringRegistry } from "../Registry";

export const GAME_STRINGS_ITALIAN: GameStringRegistry = {

    PROMPT_CARD_NO_EFFECT: (card) =>                                        <>Giocare {card} non avrebbe effetto. Continuare?</>,
    PROMPT_PASS_DISCARD: (ncards) =>                                        <>Devi scartare {ncards === 1 ? "una carta" : `${ncards} carte` }. Continuare?</>,
    PROMPT_MOVE_BOMB_TO_SELF: (card) =>                                     <>Stai lasciando {card} su te stesso. Continuare?</>,
    PROMPT_REPLACE: (card, target_card) =>                                  <>Vuoi giocare {card} per rimpiazzare {target_card}?</>,
    PROMPT_TARGET_SELF: (card) =>                                           <>Vuoi giocare {card} su te stesso?</>,
    PROMPT_TARGET_GHOST: (card, player) =>                                  <>{player} è un fantasma, giocare {card} non avrebbe effetto. Continuare?</>,
    PROMPT_NO_REDRAW: (card) =>                                             <>Vuoi giocare {card} senza ripescare la carta?</>,
    PROMPT_BANG_STRENGTH: (ncards) =>                                       <>Devi rispondere con {ncards} Mancato! Continuare?</>,
    PROMPT_NO_BANGS_PLAYED: (card) =>                                       <>Non hai giocato nessun Bang, giocare {card} non avrebbe effetto. Continuare?</>,
    PROMPT_TARGET_SELF_GHOST_CARD: () =>                                    <>Stai scartando la tua carta fantasma. Continuare?</>,
    PROMPT_WASTEFUL_HEAL: (card, amount, max_amount) =>                     <>Giocare {card} per curarsi di {amount === 1 ? "un punto vita" : `${amount} punti vita`} sprecherebbe {max_amount === 1 ? "un punto vita" : `${max_amount} punti vita`}. Continuare?</>,
    PROMPT_BANDIDOS_SUICIDE: (card) =>                                      <>Giocare {card} porta al suicidio. Continuare?</>,
    PROMPT_PLAY_OR_PICK: (card) =>                                          <>{card} : Giocare la carta o scartarla?</>,

    STATUS_GAME_OVER: () =>                                                 <>Partita Finita</>,
    STATUS_YOUR_TURN: () =>                                                 <>Tocca a te ... Scegli come pescare</>,
    STATUS_YOUR_TURN_OTHER: (player) =>                                     <>Tocca a {player}</>,
    STATUS_CHARACTERCHOICE: () =>                                           <>Scegli il tuo personaggio</>,
    STATUS_CHARACTERCHOICE_OTHER: (player) =>                               <>{player} deve scegliere il personaggio</>,
    STATUS_PREDRAW: () =>                                                   <>Scegli per quale carta estrarre</>,
    STATUS_PREDRAW_OTHER: (player) =>                                       <>{player} deve scegliere per quale carta estrarre</>,
    STATUS_CHECK: (card) =>                                                 <>Scegli quale carta estrarre per {card}</>,
    STATUS_CHECK_OTHER: (player, card) =>                                   <>{player} deve scegliere quale carta estrarre per {card}</>,
    STATUS_GENERALSTORE: (card) =>                                          <>{card} ... Scegli una carta</>,
    STATUS_GENERALSTORE_OTHER: (player, card) =>                            <>{card} ... {player} deve scegliere una carta</>,
    STATUS_DISCARD: (player) =>                                             <>{player} ... Scarta una carta</>,
    STATUS_DISCARD_OTHER: (player, card) =>                                 <>{card} ... {player} deve scartare una carta</>,
    STATUS_DISCARD_PASS: (ncards) =>                                        <>Scarta {ncards === 1 ? "una carta" : `${ncards} carte`} prima di passare il turno</>,
    STATUS_DISCARD_PASS_OTHER: (player, ncards) =>                          <>{player} deve scartare {ncards === 1 ? "una carta" : `${ncards} carte`} prima di passare il turno</>,
    STATUS_BANG: (card, strength, damage) =>                                <>{card} ... Rispondi con {strength === 1 ? "Mancato" : `${strength} Mancato`} o perdi {damage === 1 ? "un punto vita" : `${damage} punti vita`}</>,
    STATUS_BANG_OTHER: (player, card) =>                                    <>{player} deve rispondere a {card}</>,
    STATUS_CARD_AS_BANG: (card, strength, damage) =>                        <>{card} come Bang! ... Rispondi con {strength === 1 ? "Mancato" : `${strength} Mancato`} o perdi {damage === 1 ? "un punto vita" : `${damage} punti vita`}</>,
    STATUS_CARD_AS_BANG_OTHER: (player, card) =>                            <>{player} deve rispondere a {card} come Bang!</>,
    STATUS_CARD_AS_GATLING: (card) =>                                       <>{card} come Gatling ... Rispondi con Mancato o perdi un punto vita</>,
    STATUS_CARD_AS_GATLING_OTHER: (player, card) =>                         <>{player} deve rispondere a {card} come Gatling</>,
    STATUS_INDIANS: (card) =>                                               <>{card} ... Rispondi con Bang o perdi un punto vita</>,
    STATUS_INDIANS_OTHER: (player, card) =>                                 <>{player} deve rispondere a {card}</>,
    STATUS_DUEL: (card) =>                                                  <>{card} ... Rispondi con Bang o perdi un punto vita</>,
    STATUS_DUEL_OTHER: (player, card) =>                                    <>{player} deve rispondere a {card}</>,
    STATUS_DESTROY: (card, target_card) =>                                  <>{card} per scartare {target_card}</>,
    STATUS_DESTROY_FROM_HAND: (card) =>                                     <>{card} per scartare una carta dalla mano</>,
    STATUS_DESTROY_OTHER: (player, card, target_card) =>                    <>{card} per scartare {target_card} di {player}</>,
    STATUS_DESTROY_OTHER_FROM_HAND: (player, card) =>                       <>{card} per scartare una carta dalla mano di {player}</>,
    STATUS_STEAL: (card, target_card) =>                                    <>{card} per rubare {target_card}</>,
    STATUS_STEAL_FROM_HAND: (card) =>                                       <>{card} per rubare una carta dalla mano</>,
    STATUS_STEAL_OTHER: (player, card, target_card) =>                      <>{card} per rubare {target_card} di {player}</>,
    STATUS_STEAL_OTHER_FROM_HAND: (player, card) =>                         <>{card} per rubare una carta dalla mano di {player}</>,
    STATUS_DEATH: (nbeers) =>                                               <>Devi giocare {nbeers === 1 ? "una birra" : `${nbeers} birre`} per salvarti</>,
    STATUS_DEATH_OTHER: (player, nbeers) =>                                 <>{player} deve giocare {nbeers === 1 ? "una birra" : `${nbeers} birre`} per salvarsi</>,
    STATUS_DISCARD_ALL: () =>                                               <>Sei morto! Scarta tutte le tue carte</>,
    STATUS_DISCARD_ALL_OTHER: (player) =>                                   <>{player} è morto e deve scartare tutte le sue carte</>,
    STATUS_DISCARD_HAND: (card) =>                                          <>{card} ... devi scartare tutta la tua mano</>,
    STATUS_DISCARD_HAND_OTHER: (card, player) =>                            <>{card} ... {player} deve scartare tutta la sua mano</>,
    STATUS_SHERIFF_KILLED_DEPUTY: () =>                                     <>Hai ucciso il tuo vice! Scarta tutte le tue carte</>,
    STATUS_SHERIFF_KILLED_DEPUTY_OTH: (player) =>                           <>{player} ha ucciso il suo vice e deve scartare tutte le sue carte</>,
    STATUS_BANDIDOS: (card) =>                                              <>{card} ... Scarta due carte o perdi un punto vita</>,
    STATUS_BANDIDOS_OTHER: (player, card) =>                                <>{player} deve rispondere a {card}</>,
    STATUS_TORNADO: (card) =>                                               <>{card} ... Scarta una carta per pescarne due</>,
    STATUS_TORNADO_OTHER: (player, card) =>                                 <>{card} ... {player} deve scartare una carta per pescarne due</>,
    STATUS_POKER: (card) =>                                                 <>{card} ... Scarta una carta</>,
    STATUS_POKER_OTHER: (player, card) =>                                   <>{card} ... {player} deve scartare una carta</>,
    STATUS_POKER_DRAW: (card) =>                                            <>{card} ... Scegli quali carte pescare</>,
    STATUS_POKER_DRAW_OTHER: (player, card) =>                              <>{card} ... {player} deve scegliere quale carta pescare</>,
    STATUS_SAVED: (card, player) =>                                         <>{card} ... Scegli se pescare dal mazzo o dalla mano di {player}</>,
    STATUS_SAVED_OTHER: (player, card, target) =>                           <>{card} ... {player} deve scegliere se pescare dal mazzo o dalla mano di {target}</>,
    STATUS_ADD_CUBE: (ncubes) =>                                            <>Scegli su quale carta mettere {ncubes === 1 ? "un cubetto" : `${ncubes} cubetti`}</>,
    STATUS_ADD_CUBE_OTHER: (player, ncubes) =>                              <>{player} deve scegliere su quale carta mettere {ncubes === 1 ? "un cubetto" : `${ncubes} cubetti`}</>,
    STATUS_ADD_CUBE_FOR: (card, ncubes) =>                                  <>Scegli su quale carta mettere {ncubes === 1 ? "un cubetto" : `${ncubes} cubetti`}, per {card}</>,
    STATUS_ADD_CUBE_FOR_OTHER: (player, card, ncubes) =>                    <>{player} deve scegliere su quale carta mettere {ncubes === 1 ? "un cubetto" : `${ncubes} cubetti`}, per {card}</>,
    STATUS_MOVE_BOMB: (card) =>                                             <>Scegli su chi spostare {card}</>,
    STATUS_MOVE_BOMB_OTHER: (player, card) =>                               <>{player} deve scegliere su chi spostare {card}</>,
    STATUS_RUST: (card) =>                                                  <>{card} ... Scarta un cubo da ogni tua carta</>,
    STATUS_RUST_OTHER: (player, card) =>                                    <>{card} contro {player}</>,
    STATUS_RICOCHET: (card, target_card) =>                                 <>{card} ... Rispondi con Mancato o scarta {target_card}</>,
    STATUS_RICOCHET_OTHER: (player, card, target_card) =>                   <>{card} per scartare {target_card} di {player}</>,
    STATUS_PEYOTE: (card) =>                                                <>{card} ... Dichiara Rosso o Nero</>,
    STATUS_PEYOTE_OTHER: (player, card) =>                                  <>{card} ... {player} deve scegliere Rosso o Nero</>,
    STATUS_HANDCUFFS: (card) =>                                             <>{card} ... Dichiara un seme</>,
    STATUS_HANDCUFFS_OTHER: (player, card) =>                               <>{card} ... {player} deve dichiarare un seme</>,
    STATUS_KIT_CARLSON: (card) =>                                           <>{card} ... Scegli quali carte pescare</>,
    STATUS_KIT_CARLSON_OTHER: (player, card) =>                             <>{card} ... {player} deve scegliere quali carte pescare</>,
    STATUS_CLAUS_THE_SAINT: (card) =>                                       <>{card} ... Scegli le carte da dare agli altri giocatori</>,
    STATUS_CLAUS_THE_SAINT_OTHER: (player, card) =>                         <>{card} ... {player} deve scegliere le carte da dare agli altri giocatori</>,
    STATUS_VERA_CUSTER: (card) =>                                           <>{card} ... Scegli quale personaggio copiare</>,
    STATUS_VERA_CUSTER_OTHER: (player, card) =>                             <>{card} ... {player} deve scegliere quale personaggio copiare</>,
    STATUS_YOUL_GRINNER: (card, player) =>                                  <>{card} ... Dai una carta a {player}</>,
    STATUS_YOUL_GRINNER_OTHER: (card, player, target) =>                    <>{card} ... {target} deve dare una carta a {player}</>,
    STATUS_DUTCH_WILL: (card) =>                                            <>{card} ... Scegli quale carta pescare</>,
    STATUS_DUTCH_WILL_OTHER: (player, card) =>                              <>{card} ... {player} deve scegliere quale carta pescare</>,
    STATUS_THEDALTONS: (card) =>                                            <>{card} ... Scarta una carta blu</>,
    STATUS_THEDALTONS_OTHER: (player, card) =>                              <>{card} ... {player} deve scartare una carta blu</>,
    STATUS_CAN_PLAY_CARD: (card) =>                                         <>Puoi giocare {card}</>,
    STATUS_CAN_PLAY_CARD_OTHER: (player, card) =>                           <>{player} Può giocare {card}</>,
    STATUS_DAMAGING: (player, card, damage) =>                              <>{player} perde {damage === 1 ? "un punto vita" : `${damage} punti vita`} per {card}</>,
    STATUS_DAMAGING_AS_BANG: (player, card, damage) =>                      <>{player} perde {damage === 1 ? "un punto vita" : `${damage} punti vita`} per {card} come Bang!</>,
    STATUS_DAMAGING_AS_GATLING: (player, card) =>                           <>{player} perde un punto vita per {card} come Gatling!</>,
    STATUS_REQ_TUMBLEWEED: (player, card, target_card, drawn_card) =>       <>{player} estrae {drawn_card} per {target_card} ... Puoi giocare {card}</>,
    STATUS_REQ_TUMBLEWEED_OTHER: (player, card, target_card, drawn_card, target) => <>{player} estrae {drawn_card} per {target_card} ... {target} può giocare {card}</>,
    STATUS_REQ_TUMBLEWEED_FOR: (player, card, target_card) =>               <>{player} estrae per {target_card} ... Puoi giocare {card}</>,
    STATUS_REQ_TUMBLEWEED_FOR_OTHER: (player, card, target_card, target) => <>{player} estrae per {target_card} ... {target} può giocare {card}</>,
    STATUS_SWITCH_CARDS: (card, target_card, chosen_card) =>                <>{card} per scambiare {target_card} con {chosen_card}</>,
    STATUS_SWITCH_CARDS_OTHER: (player, card, target_card, chosen_card) =>  <>{card} contro {player} per scambiare {target_card} con {chosen_card}</>,
    STATUS_LASTWILL: (card) =>                                              <>Puoi giocare {card} per dare fino a tre carte a un giocatore</>,
    STATUS_LASTWILL_OTHER: (card, player) =>                                <>{player} può giocare {card}</>,
    STATUS_NEWIDENTITY: (card) =>                                           <>{card} ... Scegli se cambiare personaggio</>,
    STATUS_NEWIDENTITY_OTHER: (player, card) =>                             <>{card} ... {player} deve scegliere se cambiare personaggio</>,
    STATUS_FORCE_PLAY_CARD: (card) =>                                       <>Devi giocare {card}</>,
    STATUS_FORCE_PLAY_CARD_OTHER: (player, card) =>                         <>{player} deve giocare {card}</>,
    STATUS_FORCE_EQUIP_CARD: (card) =>                                      <>Devi equipaggiare {card}</>,
    STATUS_FORCE_EQUIP_CARD_OTHER: (player, card) =>                        <>{player} deve equipaggiare {card}</>,
    STATUS_MULTI_VULTURE_SAM: (card, player) =>                             <>{card} ... scegli quale carta prendere da {player}</>,
    STATUS_MULTI_VULTURE_SAM_OTHER: (card, player, target) =>               <>{card} ... {player} deve scegliere quale carta prendere da {target}</>,
    STATUS_RANCH: (card) =>                                                 <>{card} ... Puoi scartare un qualsiasi numero di carte dalla mano per pescarne altrettante</>,
    STATUS_RANCH_OTHER: (card, player) =>                                   <>{card} ... {player} può scartare un qualsiasi numero di carte dalla mano per pescarne altrettante</>,
    STATUS_SGT_BLAZE_LOCOMOTIVE: (card) =>                                  <>{card} ... Puoi ignorare l'effetto della locomotiva contro un giocatore</>,
    STATUS_SGT_BLAZE_LOCOMOTIVE_OTH: (card, player) =>                      <>{card} ... {player} può ignorare l'effetto della locomotiva contro un giocatore</>,
    STATUS_CATTLE_TRUCK: (card) =>                                          <>{card} ... Scegli una carta da pescare</>,
    STATUS_CATTLE_TRUCK_OTHER: (player, card) =>                            <>{card} ... {player} deve scegliere una carta da pescare</>,
    STATUS_DISCARD_TABLE: (card) =>                                         <>{card} ... Scarta una carta in gioco</>,
    STATUS_DISCARD_TABLE_OTHER: (player, card) =>                           <>{card} ... {player} deve scartare una carta in gioco</>,
    STATUS_LOUNGE_CAR: (card) =>                                            <>{card} ... dai uno dei vagoni pescati a un altro giocatore</>,
    STATUS_LOUNGE_CAR_OTHER: (player, card) =>                              <>{card} ... {player} deve dare uno dei vagoni pescati a un altro giocatore</>,
    STATUS_MAIL_CAR: (card) =>                                              <>{card} ... dai una delle carte pescate a un altro giocatore</>,
    STATUS_MAIL_CAR_OTHER: (player, card) =>                                <>{card} ... {player} deve dare una delle carte pescate a un altro giocatore</>,
    STATUS_MAP: (card) =>                                                   <>{card} ... Scegli una delle carte e scarta l'altra o Conferma per sceglierle entrambe</>,
    STATUS_MAP_OTHER: (player, card) =>                                     <>{card} ... {player} deve scartare una carta o confermare</>,
    STATUS_MOST_WANTED: (card) =>                                           <>{card} ... Estrai. Se è picche, perdi un punto vita</>,
    STATUS_MOST_WANTED_OTHER: (player, card) =>                             <>{card} contro {player}</>,
    STATUS_TRAIN_ROBBERY: (card) =>                                         <>{card} ... scegli una carta</>,
    STATUS_TRAIN_ROBBERY_OTHER: (player, card) =>                           <>{card} ... {player} deve scegliere una carta</>,
    STATUS_TRAIN_ROBBERY_CHOOSE: (card, target_card) =>                     <>{card} ... scegli se scartare {target_card} o ricevere un Bang</>,
    STATUS_TRAIN_ROBBERY_CHOOSE_OTH: (player, card, target_card) =>         <>{card} ... {player} deve scegliere se scartare {target_card} o ricevere un Bang</>,

    ERROR_INVALID_ACTION: () =>                                             <>Azione non valida</>,
    ERROR_TIMER_EXPIRED: () =>                                              <>Il tempo è scaduto</>,
    ERROR_NOT_ENOUGH_GOLD: () =>                                            <>Non hai abbastanza pepite</>,
    ERROR_NOT_ENOUGH_CUBES: () =>                                           <>Non ci sono abbastanza cubetti</>,
    ERROR_NOT_ENOUGH_CUBES_ON: (card) =>                                    <>Non ci sono abbastanza cubetti su {card}</>,
    ERROR_CARD_HAS_FULL_CUBES: (card) =>                                    <>{card} ha già 4 cubetti</>,
    ERROR_INVALID_TARGETS: () =>                                            <>Bersagli non validi</>,
    ERROR_PLAYER_MUST_DRAW: () =>                                           <>Devi pescare</>,
    ERROR_PLAYER_MUST_NOT_DRAW: () =>                                       <>Non devi pescare adesso</>,
    ERROR_CANT_DISCARD_OWN_BLACK: () =>                                     <>Non puoi scartare le tue carte nere</>,
    ERROR_CARD_DISABLED_BY: (card, disabler) =>                             <>{card} è disabilitata da {disabler}</>,
    ERROR_INVALID_SUIT: (disabler, card) =>                                 <>Non puoi giocare {card}: seme non valido per {disabler}</>,
    ERROR_CARD_INACTIVE: (card) =>                                          <>{card} non è attiva in questo turno</>,
    ERROR_CANT_EQUIP_CARDS: () =>                                           <>Non si possono equipaggiare carte</>,
    ERROR_DUPLICATED_CARD: (card) =>                                        <>Carta duplicata: {card}</>,
    ERROR_TARGET_PLAYING_CARD: () =>                                        <>Non puoi bersagliare la stessa carta che stai giocando</>,
    ERROR_TARGET_NOT_PLAYER: () =>                                          <>Il bersagio non è un giocatore</>,
    ERROR_TARGET_NOT_DEAD: () =>                                            <>Non puoi bersagliare un giocatore vivo</>,
    ERROR_TARGET_DEAD: () =>                                                <>Non puoi bersagliare un giocatore morto</>,
    ERROR_TARGET_SHERIFF: () =>                                             <>Non puoi bersagliare lo sceriffo</>,
    ERROR_TARGET_NOT_SELF: () =>                                            <>Puoi bersagliare solo tè stesso</>,
    ERROR_TARGET_SELF: () =>                                                <>Non puoi bersagliare tè stesso</>,
    ERROR_TARGET_ORIGIN: () =>                                              <>Non puoi bersagliare chi ti attacca</>,
    ERROR_TARGET_EMPTY_HAND: () =>                                          <>Non puoi bersagliare chi non ha carte in mano</>,
    ERROR_TARGET_EMPTY_TABLE: () =>                                         <>Non puoi bersagliare chi non ha carte in gioco</>,
    ERROR_TARGET_EMPTY_CUBES: () =>                                         <>Non puoi bersagliare chi non ha cubetti</>,
    ERROR_TARGET_NOT_IN_RANGE: () =>                                        <>Bersaglio fuori raggio</>,
    ERROR_TARGETS_NOT_UNIQUE: () =>                                         <>I bersagli non sono unici</>,
    ERROR_TARGETS_NOT_ADJACENT: () =>                                       <>I bersagli non sono adiacenti</>,
    ERROR_TARGET_NOT_CARD: () =>                                            <>Questa carta non è bersagliabile</>,
    ERROR_TARGET_BLACK_CARD: () =>                                          <>Non puoi bersagliare carte nere</>,
    ERROR_TARGET_NOT_SELECTION: () =>                                       <>Puoi bersagliare solo carte dalla selezione</>,
    ERROR_TARGET_NOT_TABLE_CARD: () =>                                      <>Puoi bersagliare solo carte in gioco</>,
    ERROR_TARGET_NOT_HAND_CARD: () =>                                       <>Puoi bersagliare solo carte in mano</>,
    ERROR_TARGET_NOT_BLUE_CARD: () =>                                       <>Puoi bersagliare solo carte carte blu</>,
    ERROR_TARGET_NOT_TRAIN: () =>                                           <>Puoi bersagliare solo vagoni</>,
    ERROR_TARGET_TRAIN: () =>                                               <>Non puoi bersagliare vagoni</>,
    ERROR_TARGET_NOT_BLUE_OR_TRAIN: () =>                                   <>Puoi bersagliare solo carte blu o vagoni</>,
    ERROR_TARGET_NOT_HEARTS: () =>                                          <>Puoi bersagliare solo carte di cuori</>,
    ERROR_TARGET_NOT_DIAMONDS: () =>                                        <>Puoi bersagliare solo carte di quadri</>,
    ERROR_TARGET_NOT_CLUBS: () =>                                           <>Puoi bersagliare solo carte di fiori</>,
    ERROR_TARGET_NOT_SPADES: () =>                                          <>Puoi bersagliare solo carte di picche</>,
    ERROR_NO_ORIGIN_CARD_SUIT: () =>                                        <>Seme di carta non valido</>,
    ERROR_TARGET_NOT_TWO_TO_NINE: () =>                                     <>Puoi bersagliare solo carte con segno da 2 a 9</>,
    ERROR_TARGET_NOT_TEN_TO_ACE: () =>                                      <>Puoi bersagliare solo carte con segno da 10 a A</>,
    ERROR_TARGET_NOT_BANG: () =>                                            <>Puoi bersagliare solo carte Bang!</>,
    ERROR_TARGET_NOT_MISSED: () =>                                          <>Puoi bersagliare solo carte Mancato!</>,
    ERROR_TARGET_NOT_BEER: () =>                                            <>Puoi bersagliare solo carte Birra</>,
    ERROR_TARGET_NOT_CATBALOU_PANIC: () =>                                  <>Puoi bersagliare solo carte Cat Balou o Panico!</>,
    ERROR_TARGET_NOT_BRONCO: () =>                                          <>Puoi bersagliare solo Bronco</>,
    ERROR_TARGET_NOT_CUBE_SLOT: () =>                                       <>Questa carta non può contenere cubetti</>,
    ERROR_SCENARIO_AT_PLAY: (card) =>                                       <>{card} è in gioco</>,
    ERROR_CANT_PLAY_CARD: (card) =>                                         <>Non puoi giocare {card}</>,
    ERROR_ONE_BANG_PER_TURN: () =>                                          <>Puoi giocare un solo Bang per turno</>,
    ERROR_CANT_SELF_DAMAGE: () =>                                           <>Non puoi toglierti lultimo punto vita</>,
    ERROR_CANT_HEAL_PAST_FULL_HP: () =>                                     <>Non puoi curarti oltre lultimo punto vita</>,
    ERROR_NOT_START_OF_TURN: () =>                                          <>Non sei a inizio turno</>,
    ERROR_DISCARD_PILE_EMPTY: () =>                                         <>La pila degli scarti è vuota</>,
    ERROR_MAX_USAGES: (card, max_usages) =>                                 <>Non puoi giocare {card} più di {max_usages} volte per turno</>,
    ERROR_MANDATORY_CARD: (card) =>                                         <>Sei obblicato a giocare {card}</>,
    ERROR_TARGET_NOT_UNIQUE: () =>                                          <>I bersagli devono essere unici</>,
    ERROR_CANNOT_REPEAT_CARD: (card) =>                                     <>Non puoi giocare {card} due volte di fila</>,
    ERROR_CANT_PLAY_WHILE_EQUIPPING: (card) =>                              <>Non puoi giocare {card} mentre equipaggi una carta</>,
    ERROR_NO_RANGED_TARGET: (mod_card, card) =>                             <>Non puoi giocare {mod_card} perché {card} non ha limite di distanza</>,
    ERROR_CANNOT_SKIP_PLAYER: (player) =>                                   <>Non puoi ignorare l'effetto contro {player}</>,
    ERROR_CANNOT_TARGET_PLAYER: (card, player, target_card) =>              <>Non puoi giocare {target_card} contro {player} per {card}</>,
    ERROR_TRAIN_NOT_IN_ANY_STATION: () =>                                   <>Il vagone non è accoppiato a una stazione</>,
    ERROR_TRAIN_NOT_IN_THIS_STATION: () =>                                  <>Il vagone non è accoppiato a questa stazione</>,

    LOG_GAME_START: () =>                                                   <>La partita è iniziata</>,
    LOG_GAME_OVER: () =>                                                    <>La partita è terminata</>,
    LOG_DECK_RESHUFFLED: () =>                                              <>Il mazzo viene rimescolato</>,
    LOG_SHOP_RESHUFFLED: () =>                                              <>Il mazzo dello shop viene rimescolato</>,
    LOG_TURN_START: (player) =>                                             <>È il turno di {player}</>,
    LOG_SOLD_BEER: (player, card) =>                                        <>{player} vende {card}</>,
    LOG_DISCARDED_CARD: (player, target, target_card) =>                    <>{player} scarta {target_card} a {target}</>,
    LOG_DISCARDED_SELF_CARD: (player, card) =>                              <>{player} scarta {card}</>,
    LOG_DISCARDED_A_CARD_FOR: (card, player) =>                             <>{player} scarta una carta per {card}</>,
    LOG_DISCARDED_CARD_FOR: (card, player, target_card) =>                  <>{player} scarta {target_card} per {card}</>,
    LOG_DISCARDED_ORANGE_CARD: (player, card) =>                            <>{player} deve scartare {card}</>,
    LOG_STOLEN_CARD: (player, target, card) =>                              <>{player} ruba {card} di {target}</>,
    LOG_STOLEN_CARD_FROM_HAND: (player, target) =>                          <>{player} ruba una carta dalla mano di {target}</>,
    LOG_STOLEN_SELF_CARD: (player, card) =>                                 <>{player} ripesca {card}</>,
    LOG_STOLEN_SELF_CARD_FROM_HAND: (player) =>                             <>{player} ripesca una carta dalla mano</>,
    LOG_DRAWN_WITH_CHARACTER: (card, player) =>                             <>{player} pesca usando {card}</>,
    LOG_DRAWN_FROM_GENERALSTORE: (player, target_card, card) =>             <>{player} pesca {target_card} per {card}</>,
    LOG_PLAYED_CHARACTER: (card, player) =>                                 <>{player} gioca l'effetto di {card}</>,
    LOG_RESPONDED_WITH_CHARACTER: (card, player) =>                         <>{player} risponde con l'effetto di {card}</>,
    LOG_PLAYED_CARD: (card, player) =>                                      <>{player} gioca {card}</>,
    LOG_PLAYED_CARD_ON: (card, player, target) =>                           <>{player} gioca {card} su {target}</>,
    LOG_PLAYED_CARD_STEAL: (card, player, target, target_card) =>           <>{player} gioca {card} per rubare {target_card} di {target}</>,
    LOG_PLAYED_CARD_STEAL_HAND: (card, player, target) =>                   <>{player} gioca {card} per rubare una carta dalla mano di {target}</>,
    LOG_PLAYED_CARD_STEAL_OWN: (card, player, target_card) =>               <>{player} gioca {card} per ripescare la sua {target_card}</>,
    LOG_PLAYED_CARD_STEAL_OWN_HAND: (card, player) =>                       <>{player} gioca {card} per rubare una carta dalla sua mano</>,
    LOG_PLAYED_CARD_DESTROY: (card, player, target, target_card) =>         <>{player} gioca {card} per scartare {target_card} di {target}</>,
    LOG_PLAYED_CARD_DESTROY_HAND: (card, player, target) =>                 <>{player} gioca {card} per scartare una carta dalla mano di {target}</>,
    LOG_PLAYED_CARD_DESTROY_OWN: (card, player, target_card) =>             <>{player} gioca {card} per scartare la sua {target_card}</>,
    LOG_PLAYED_CARD_AS_BANG_ON: (card, player, target) =>                   <>{player} gioca {card} come Bang! su {target}</>,
    LOG_PLAYED_CARD_AS_GATLING: (card, player) =>                           <>{player} gioca {card} come Gatling</>,
    LOG_PLAYED_CARD_AS_MISSED: (card, player) =>                            <>{player} gioca {card} come Mancato!</>,
    LOG_PLAYED_TABLE_CARD: (card, player) =>                                <>{player} gioca {card} da terra</>,
    LOG_EQUIPPED_CARD: (card, player) =>                                    <>{player} equipaggia {card}</>,
    LOG_EQUIPPED_CARD_TO: (card, player, target) =>                         <>{player} equipaggia {card} a {target}</>,
    LOG_BOUGHT_CARD: (card, player) =>                                      <>{player} compra e gioca {card}</>,
    LOG_BOUGHT_EQUIP: (card, player) =>                                     <>{player} compra ed equipaggia {card}</>,
    LOG_BOUGHT_EQUIP_TO: (card, player, target) =>                          <>{player} compra ed equipaggia {card} a {target}</>,
    LOG_CHOSE_CARD: (card, player) =>                                       <>{player} sceglie {card}</>,
    LOG_RESPONDED_WITH_CARD: (card, player) =>                              <>{player} risponde con {card}</>,
    LOG_RESPONDED_WITH_CARD_AS_MISSED: (card, player) =>                    <>{player} risponde con {card} come Mancato!</>,
    LOG_DRAWN_FROM_DECK: (player) =>                                        <>{player} pesca dal mazzo</>,
    LOG_DRAWN_CARD: (player, card) =>                                       <>{player} pesca {card}</>,
    LOG_DRAWN_CARDS: (player, ncards) =>                                    <>{player} pesca {ncards === 1 ? "una carta" : `${ncards} carte`}</>,
    LOG_DRAWN_CARD_FOR: (player, target_card, card) =>                      <>{player} pesca {target_card} per {card}</>,
    LOG_DRAWN_CARDS_FOR: (player, ncards, card) =>                          <>{player} pesca {ncards === 1 ? "una carta" : `${ncards} carte`} per {card}</>,
    LOG_DRAWN_FROM_DISCARD: (player, card) =>                               <>{player} pesca {card} dalla cima degli scarti</>,
    LOG_REVEALED_CARD: (player, card) =>                                    <>{player} rivela {card}</>,
    LOG_CHECK_DREW_CARD: (card, player, target_card) =>                     <>{player} estrae {target_card} per {card}</>,
    LOG_TAKEN_DAMAGE: (card, player, damage) =>                             <>{player} perde {damage === 1 ? "un punto vita" : `${damage} punti vita`} per {card}</>,
    LOG_TAKEN_DAMAGE_AS_BANG: (card, player, damage) =>                     <>{player} perde {damage === 1 ? "un punto vita" : `${damage} punti vita`} per {card} come Bang!</>,
    LOG_TAKEN_DAMAGE_AS_GATLING: (card, player) =>                          <>{player} perde un punto vita per {card} come Gatling</>,
    LOG_HEALED: (player, amount) =>                                         <>{player} si cura di {amount === 1 ? "un punto" : `${amount} punti`} vita</>,
    LOG_PLAYER_KILLED: (player, target) =>                                  <>{player} ha ucciso {target}</>,
    LOG_PLAYER_DIED: (player) =>                                            <>{player} è morto</>,
    LOG_JAIL_BREAK: (player) =>                                             <>{player} esce di prigione</>,
    LOG_SKIP_TURN: (player) =>                                              <>{player} salta il turno</>,
    LOG_CARD_EXPLODES: (card) =>                                            <>{card} esplode!</>,
    LOG_CARD_HAS_EFFECT: (card) =>                                          <>Si attiva l'effetto di {card}</>,
    LOG_CHARACTER_CHOICE: (player, card) =>                                 <>{player} ha {card} come personaggio</>,
    LOG_DRAWN_SHOP_CARD: (card) =>                                          <>Viene rivelata {card} dallo shop</>,
    LOG_KILLED_OUTLAW: (player) =>                                          <>{player} ha ucciso un fuorilegge!</>,
    LOG_SHERIFF_KILLED_DEPUTY: (player) =>                                  <>{player} ha ucciso il suo vice!</>,
    LOG_MOVE_BOMB_ON: (card, player, target) =>                             <>{player} sposta {card} su {target}</>,
    LOG_MOVED_CUBE: (player, origin, target, ncubes) =>                     <>{player} sposta {ncubes === 1 ? "un cubo" : `${ncubes} cubi`} da {origin} a {target}</>,
    LOG_MOVED_CUBE_FROM: (player, target, card, target_card, ncubes) =>     <>{player} sposta {ncubes === 1 ? "un cubo" : `${ncubes} cubi`} da {card} di {target} a {target_card}</>,
    LOG_PAID_CUBE: (player, card, ncubes) =>                                <>{player} paga {ncubes === 1 ? "un cubo" : `${ncubes} cubi`} da {card}</>,
    LOG_DROP_CUBE: (player, card, ncubes) =>                                <>{player} scarta {ncubes === 1 ? "un cubo" : `${ncubes} cubi`} da {card}</>,
    LOG_ADD_CUBE: (player, card, ncubes) =>                                 <>{player} aggiunge {ncubes === 1 ? "un cubo" : `${ncubes} cubi`} su {card}</>,
    LOG_GIFTED_CARD: (player, target, target_card) =>                       <>{player} dà {target_card} a {target}</>,
    LOG_GIFTED_A_CARD: (player, target) =>                                  <>{player} dà una carta a {target}</>,
    LOG_COPY_CHARACTER: (player, card) =>                                   <>{player} copia l'effetto di {card}</>,
    LOG_DRAWN_SCENARIO_CARD: (card) =>                                      <>Entra in gioco {card}</>,
    LOG_RECEIVED_N_BANGS_FOR: (player, card, nbangs) =>                     <>{player} riceve {nbangs} Bang! per {card}</>,
    LOG_MANDATORY_CARD: (player, card) =>                                   <>{player} deve giocare {card} nella fase due</>,
    LOG_DECLARED_RED: (player, card) =>                                     <>{player} dichiara Rosso per {card}</>,
    LOG_DECLARED_BLACK: (player, card) =>                                   <>{player} dichiara Nero per {card}</>,
    LOG_DECLARED_CLUBS: (player, card) =>                                   <>{player} dichiara Fiori per {card}</>,
    LOG_DECLARED_DIAMONDS: (player, card) =>                                <>{player} dichiara Quadri per {card}</>,
    LOG_DECLARED_HEARTS: (player, card) =>                                  <>{player} dichiara Cuori per {card}</>,
    LOG_DECLARED_SPADES: (player, card) =>                                  <>{player} dichiara Picche per {card}</>,
    LOG_POKER_REVEAL: (card, revealed) =>                                   <>Viene rivelata {revealed} per {card}</>,
    LOG_POKER_ACE: () =>                                                    <>Cè un Asso, tutte le carte sono scartate</>,
    LOG_REVIVE: (player, card) =>                                           <>{player} ritorna in gioco per {card}</>,
    LOG_SWAP_CARDS: (player, target, target_card, chosen_card) =>           <>{player} scambia {target_card} con {chosen_card} di {target}</>,
    LOG_PLAYER_IMMUNE_TO_CARD: (player, card, disabler) =>                  <>{player} è immune a {card} per {disabler}</>,
    LOG_DEFLECTED_BANG_TO: (card, player, target_card, target) =>           <>{player} usa {card} per deviare {target_card} contro {target}</>,
    LOG_TRAIN_ADVANCE: () =>                                                <>Il treno avanza</>,
    LOG_PAID_FOR_STATION: (card, player) =>                                 <>{player} paga il prezzo per la stazione {card}</>,
    LOG_END_OF_LINE: () =>                                                  <>Capolinea! Si attiva l'effetto della locomotiva</>,
    LOG_SKIP_PLAYER: (card, player, target, target_card) =>                 <>{player} usa {card} per escludere {target} dall'effetto di {target_card}</>,
    LOG_SKIP_PLAYER_LOCOMOTIVE: (card, player, target) =>                   <>{player} usa {card} per escludare {target} dall'effetto della locomotiva</>,

};