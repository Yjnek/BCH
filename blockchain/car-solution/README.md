Pour lancer la blockchain:
npx hardhat node

se connecter sur metamask et importer la blockhain, puis un utilisateur.
L url est 127.0.0.1:8545
Le chainId est 31337
le mot de passe du groupe metamask est yjnekistesting (pour kenjy).

Si un metamask est deja configurer, il faut clear le data tab des utilisateurs a l aide de options avancees dans metamask.

========================================================================================================

Presentation de l architecture du projet

dossier contracts:
contient les smartcontracts au format .sol .

dossier scripts:
contient les scripts qui vont permettre de deployer les smartcontracts qui sont compiles dans la blockchain.

dossier src:
contient le front en react.
