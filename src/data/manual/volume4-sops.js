const volume4 = {
  id: 'volume-4',
  title: 'Volume 4 — SOPs, Checklists & Modèles',
  chapters: [
    {
      id: 'v4-ch1',
      title: 'Chapitre 23 — Procédures Opérationnelles Standardisées (SOPs)',
      content: `<div class="space-y-6 text-gray-700 leading-relaxed">
        <p>Les procédures opérationnelles standardisées (SOPs) sont l'épine dorsale de notre service. Elles garantissent une qualité constante, quel que soit le consultant qui traite le dossier.</p>

        <h3 class="text-xl font-bold text-brand-navy mt-8 mb-4">SOP 1 : Prise de contact initiale</h3>
        <ol class="list-decimal pl-6 space-y-1">
          <li>Répondre dans l'heure sur WhatsApp ou par téléphone.</li>
          <li>Noter le nom complet, le pays de résidence et le projet du client.</li>
          <li>Proposer un rendez-vous de consultation (en agence ou par vidéo).</li>
          <li>Créer une fiche client dans le système.</li>
          <li>Envoyer un message de confirmation avec la date et l'heure du rendez-vous.</li>
        </ol>

        <h3 class="text-xl font-bold text-brand-navy mt-8 mb-4">SOP 2 : Consultation initiale</h3>
        <ol class="list-decimal pl-6 space-y-1">
          <li>Accueillir le client professionnellement.</li>
          <li>Suivre le script d'accueil (Chapitre 9).</li>
          <li>Remplir la fiche d'évaluation préliminaire.</li>
          <li>Collecter les documents disponibles.</li>
          <li>Expliquer le processus et les prochaines étapes.</li>
          <li>Remettre la brochure d'information.</li>
          <li>Envoyer un résumé de la consultation dans les 24 heures.</li>
        </ol>

        <h3 class="text-xl font-bold text-brand-navy mt-8 mb-4">SOP 3 : Analyse de dossier</h3>
        <ol class="list-decimal pl-6 space-y-1">
          <li>Vérifier la validité de tous les documents.</li>
          <li>Identifier les forces et faiblesses du dossier.</li>
          <li>Consulter les guides internes pour le pays et le type de visa.</li>
          <li>Si nécessaire, solliciter l'avis d'un partenaire local.</li>
          <li>Préparer un rapport d'évaluation écrit.</li>
          <li>Presente le rapport au client.</li>
        </ol>

        <h3 class="text-xl font-bold text-brand-navy mt-8 mb-4">SOP 4 : Préparation et soumission du dossier</h3>
        <ol class="list-decimal pl-6 space-y-1">
          <li>Compiler tous les documents dans l'ordre requis.</li>
          <li>Vérifier chaque document contre la checklist.</li>
          <li>Faire traduire les documents si nécessaire.</li>
          <li>Remplir les formulaires officiels.</li>
          <li>Rédiger la lettre d'explication / motivation.</li>
          <li>Faire relire le dossier par un second consultant.</li>
          <li>Présenter le dossier final au client pour validation.</li>
          <li>Soumettre le dossier.</li>
        </ol>

        <h3 class="text-xl font-bold text-brand-navy mt-8 mb-4">SOP 5 : Suivi post-soumission</h3>
        <ol class="list-decimal pl-6 space-y-1">
          <li>Confirmer la soumission au client par écrit.</li>
          <li>Suivre le statut de la demande régulièrement.</li>
          <li>Informer le client de toute évolution.</li>
          <li>Répondre aux demandes de l'ambassade dans les délais.</li>
          <li>Préparer le client à l'entretien consulaire si nécessaire.</li>
        </ol>

        <h3 class="text-xl font-bold text-brand-navy mt-8 mb-4">SOP 6 : Gestion des refus</h3>
        <ol class="list-decimal pl-6 space-y-1">
          <li>Contacter le client personnellement par téléphone.</li>
          <li>Analyser les motifs du refus.</li>
          <li>Discuter des options avec le client.</li>
          <li>Si approprié, préparer une nouvelle demande ou un recours.</li>
          <li>Documenter le refus dans le dossier du client.</li>
        </ol>
      </div>`
    },
    {
      id: 'v4-ch2',
      title: 'Chapitre 24 — Checklists par Pays et Type de Visa',
      content: `<div class="space-y-6 text-gray-700 leading-relaxed">
        <p>Les checklists sont des outils essentiels pour garantir qu'aucun document n'est oublié dans la préparation d'un dossier.</p>

        <h3 class="text-xl font-bold text-brand-navy mt-8 mb-4">Checklist universelle — Tous visas</h3>
        <div class="bg-white border border-brand-gold/20 rounded-lg p-5">
          <ul class="space-y-2">
            <li class="flex items-start gap-3"><input type="checkbox" class="mt-1" /> <span>Passeport valide (6 mois après retour)</span></li>
            <li class="flex items-start gap-3"><input type="checkbox" class="mt-1" /> <span>Photos d'identité conformes</span></li>
            <li class="flex items-start gap-3"><input type="checkbox" class="mt-1" /> <span>Formulaire de demande rempli et signé</span></li>
            <li class="flex items-start gap-3"><input type="checkbox" class="mt-1" /> <span>Relevés bancaires (3-6 mois)</span></li>
            <li class="flex items-start gap-3"><input type="checkbox" class="mt-1" /> <span>Preuve d'hébergement</span></li>
            <li class="flex items-start gap-3"><input type="checkbox" class="mt-1" /> <span>Assurance voyage/médicale</span></li>
            <li class="flex items-start gap-3"><input type="checkbox" class="mt-1" /> <span>Certificat de police</span></li>
            <li class="flex items-start gap-3"><input type="checkbox" class="mt-1" /> <span>Examen médical (si requis)</span></li>
            <li class="flex items-start gap-3"><input type="checkbox" class="mt-1" /> <span>Preuve de paiement des frais de visa</span></li>
          </ul>
        </div>

        <h3 class="text-xl font-bold text-brand-navy mt-8 mb-4">Checklist — Visa d'études Canada</h3>
        <div class="bg-white border border-brand-gold/20 rounded-lg p-5">
          <ul class="space-y-2">
            <li class="flex items-start gap-3"><input type="checkbox" class="mt-1" /> <span>Lettre d'admission d'un DLI</span></li>
            <li class="flex items-start gap-3"><input type="checkbox" class="mt-1" /> <span>Preuve de paiement des frais de scolarité (ou justificatif de financement)</span></li>
            <li class="flex items-start gap-3"><input type="checkbox" class="mt-1" /> <span>Relevés bancaires (4 mois)</span></li>
            <li class="flex items-start gap-3"><input type="checkbox" class="mt-1" /> <span>Lettre de motivation expliquant le projet d'études</span></li>
            <li class="flex items-start gap-3"><input type="checkbox" class="mt-1" /> <span>Curriculum vitae</span></li>
            <li class="flex items-start gap-3"><input type="checkbox" class="mt-1" /> <span>Diplômes et relevés de notes (traduits si nécessaire)</span></li>
            <li class="flex items-start gap-3"><input type="checkbox" class="mt-1" /> <span>Certificat de police</span></li>
            <li class="flex items-start gap-3"><input type="checkbox" class="mt-1" /> <span>Examen médical (panel physician IRCC)</span></li>
            <li class="flex items-start gap-3"><input type="checkbox" class="mt-1" /> <span>Photos d'identité conformes</span></li>
            <li class="flex items-start gap-3"><input type="checkbox" class="mt-1" /> <span>Passeport valide</span></li>
          </ul>
        </div>

        <h3 class="text-xl font-bold text-brand-navy mt-8 mb-4">Checklist — Visa Schengen (court séjour)</h3>
        <div class="bg-white border border-brand-gold/20 rounded-lg p-5">
          <ul class="space-y-2">
            <li class="flex items-start gap-3"><input type="checkbox" class="mt-1" /> <span>Formulaire de demande rempli et signé</span></li>
            <li class="flex items-start gap-3"><input type="checkbox" class="mt-1" /> <span>Passeport valide (3 mois après retour)</span></li>
            <li class="flex items-start gap-3"><input type="checkbox" class="mt-1" /> <span>Photos d'identité aux normes Schengen</span></li>
            <li class="flex items-start gap-3"><input type="checkbox" class="mt-1" /> <span>Assurance voyage (30 000€ couverture minimum)</span></li>
            <li class="flex items-start gap-3"><input type="checkbox" class="mt-1" /> <span>Réservation de vol aller-retour</span></li>
            <li class="flex items-start gap-3"><input type="checkbox" class="mt-1" /> <span>Preuve d'hébergement</span></li>
            <li class="flex items-start gap-3"><input type="checkbox" class="mt-1" /> <span>Relevés bancaires (3 mois)</span></li>
            <li class="flex items-start gap-3"><input type="checkbox" class="mt-1" /> <span>Justificatif d'emploi ou d'études</span></li>
            <li class="flex items-start gap-3"><input type="checkbox" class="mt-1" /> <span>Lettre d'invitation (si visite famille/amis)</span></li>
          </ul>
        </div>

        <h3 class="text-xl font-bold text-brand-navy mt-8 mb-4">Checklist — Réunification familiale</h3>
        <div class="bg-white border border-brand-gold/20 rounded-lg p-5">
          <ul class="space-y-2">
            <li class="flex items-start gap-3"><input type="checkbox" class="mt-1" /> <span>Acte de mariage (légalisé/apostillé)</span></li>
            <li class="flex items-start gap-3"><input type="checkbox" class="mt-1" /> <span>Actes de naissance des enfants</span></li>
            <li class="flex items-start gap-3"><input type="checkbox" class="mt-1" /> <span>Titre de séjour valide du regroupant</span></li>
            <li class="flex items-start gap-3"><input type="checkbox" class="mt-1" /> <span>Preuve de revenus du regroupant</span></li>
            <li class="flex items-start gap-3"><input type="checkbox" class="mt-1" /> <span>Preuve de logement</span></li>
            <li class="flex items-start gap-3"><input type="checkbox" class="mt-1" /> <span>Photos de famille, correspondance (preuve de relation)</span></li>
            <li class="flex items-start gap-3"><input type="checkbox" class="mt-1" /> <span>Certificats de police (tous les membres)</span></li>
            <li class="flex items-start gap-3"><input type="checkbox" class="mt-1" /> <span>Examens médicaux</span></li>
          </ul>
        </div>
      </div>`
    },
    {
      id: 'v4-ch3',
      title: 'Chapitre 25 — Modèles d\'Emails & Messages WhatsApp',
      content: `<div class="space-y-6 text-gray-700 leading-relaxed">
        <p>Ce chapitre contient des modèles prêts à l'emploi pour les communications les plus courantes.</p>

        <h3 class="text-xl font-bold text-brand-navy mt-8 mb-4">Email — Confirmation de consultation</h3>
        <div class="bg-gray-50 border border-gray-200 rounded-lg p-4 font-mono text-sm mt-2">
          <p><strong>Objet :</strong> Confirmation de consultation — TOMY Global Services</p>
          <p>Cher/Chère [Prénom],</p>
          <p>Nous vous confirmons votre rendez-vous de consultation avec TOMY Global Services.</p>
          <p><strong>Date :</strong> [Date]</p>
          <p><strong>Heure :</strong> [Heure]</p>
          <p><strong>Lieu :</strong> [Adresse ou lien vidéo]</p>
          <p>Durée estimée : 45 minutes à 1 heure.</p>
          <p>Si vous avez déjà des documents relatifs à votre projet (passeport, diplômes, correspondance), vous pouvez les apporter ou nous les transmettre à l'avance.</p>
          <p>Nous restons à votre disposition pour toute question.</p>
          <p>Bien cordialement,<br/>[Votre prénom]<br/>TOMY Global Services</p>
        </div>

        <h3 class="text-xl font-bold text-brand-navy mt-8 mb-4">Email — Demande de documents</h3>
        <div class="bg-gray-50 border border-gray-200 rounded-lg p-4 font-mono text-sm mt-2">
          <p><strong>Objet :</strong> Documents nécessaires — Dossier [Type] — [Pays] — [Nom du client]</p>
          <p>Cher/Chère [Prénom],</p>
          <p>Dans le cadre de la préparation de votre dossier pour [Pays], nous avons besoin des documents suivants :</p>
          <p>[Liste des documents]</p>
          <p>Merci de nous transmettre ces documents par email ou via WhatsApp au plus tard le [Date].</p>
          <p>Nous vous tiendrons informé de l'avancement de votre dossier.</p>
          <p>Bien cordialement,<br/>[Votre prénom]<br/>TOMY Global Services</p>
        </div>

        <h3 class="text-xl font-bold text-brand-navy mt-8 mb-4">Email — Confirmation de soumission</h3>
        <div class="bg-gray-50 border border-gray-200 rounded-lg p-4 font-mono text-sm mt-2">
          <p><strong>Objet :</strong> Dossier soumis — [Pays] — [Type de visa] — [Nom]</p>
          <p>Cher/Chère [Prénom],</p>
          <p>Nous avons le plaisir de vous informer que votre dossier de demande de [type de visa] pour [Pays] a été soumis avec succès le [Date].</p>
          <p><strong>Numéro de référence :</strong> [Numéro]</p>
          <p><strong>Délai de traitement estimé :</strong> [Délai]</p>
          <p>Nous suivons personnellement l'évolution de votre dossier et vous tiendrons informé dès que nous aurons des nouvelles.</p>
          <p>N'hésitez pas à nous contacter si vous avez des questions.</p>
          <p>Bien cordialement,<br/>[Votre prénom]<br/>TOMY Global Services</p>
        </div>

        <h3 class="text-xl font-bold text-brand-navy mt-8 mb-4">WhatsApp — Message de suivi hebdomadaire</h3>
        <div class="bg-gray-50 border border-gray-200 rounded-lg p-4 font-mono text-sm mt-2">
          <p>« Bonjour [Prénom], j'espère que vous allez bien.</p>
          <p>Je fais le point sur votre dossier [Pays]. Votre demande est toujours en cours de traitement. Je surveille l'avancement et vous tiendrai informé dès que nous avons du nouveau.</p>
          <p>N'hésitez pas si vous avez des questions. Bonne journée ! »</p>
        </div>

        <h3 class="text-xl font-bold text-brand-navy mt-8 mb-4">WhatsApp — Annonce d'approbation</h3>
        <div class="bg-gray-50 border border-gray-200 rounded-lg p-4 font-mono text-sm mt-2">
          <p>« Félicitations [Prénom] ! 🎉</p>
          <p>Nous avons le plaisir de vous annoncer que votre visa [type] pour [Pays] a été approuvé !</p>
          <p>Nous vous contactons rapidement pour vous expliquer les prochaines étapes.</p>
          <p>Toute l'équipe TOMY Global Services est fière de vous avoir accompagné dans ce projet ! »</p>
        </div>

        <h3 class="text-xl font-bold text-brand-navy mt-8 mb-4">WhatsApp — Annonce de refus</h3>
        <div class="bg-gray-50 border border-gray-200 rounded-lg p-4 font-mono text-sm mt-2">
          <p>« Bonjour [Prénom], j'ai une information importante à vous communiquer concernant votre dossier.</p>
          <p>Puis-je vous appeler pour en discuter ? »</p>
        </div>
      </div>`
    },
    {
      id: 'v4-ch4',
      title: 'Chapitre 26 — Formulaires Internes & Documents de Travail',
      content: `<div class="space-y-6 text-gray-700 leading-relaxed">
        <p>Ce chapitre présente les formulaires et documents internes utilisés par les consultants de TOMY Global Services.</p>

        <h3 class="text-xl font-bold text-brand-navy mt-8 mb-4">Fiche d'évaluation préliminaire</h3>
        <div class="bg-white border border-gray-200 rounded-lg p-5 space-y-3">
          <p><strong>Date :</strong> ___________ <strong>Consultant :</strong> ___________</p>
          <p><strong>Nom du client :</strong> ___________</p>
          <p><strong>Nationalité :</strong> ___________ <strong>Pays de résidence :</strong> ___________</p>
          <p><strong>Projet :</strong> Études ___ Travail ___ Visite ___ Réunification ___</p>
          <p><strong>Pays de destination :</strong> ___________</p>
          <p><strong>Passeport :</strong> Oui ___ Non ___ <strong>Date d'expiration :</strong> ___________</p>
          <p><strong>Moyens financiers :</strong> Suffisants ___ Insuffisants ___ À vérifier ___</p>
          <p><strong>Refus antérieurs :</strong> Oui ___ Non ___ <strong>Détails :</strong> ___________</p>
          <p><strong>Évaluation globale :</strong> Favorable ___ Risqué ___ Défavorable ___</p>
          <p><strong>Notes :</strong> ___________</p>
        </div>

        <h3 class="text-xl font-bold text-brand-navy mt-8 mb-4">Fiche de suivi de dossier</h3>
        <table class="min-w-full bg-white border border-gray-200 rounded-lg mt-4">
          <thead class="bg-gray-50">
            <tr>
              <th class="p-3 border-b text-left font-semibold">Date</th>
              <th class="p-3 border-b text-left font-semibold">Action</th>
              <th class="p-3 border-b text-left font-semibold">Statut</th>
              <th class="p-3 border-b text-left font-semibold">Prochaine étape</th>
            </tr>
          </thead>
          <tbody>
            <tr><td class="p-3 border-b">___</td><td class="p-3 border-b">___</td><td class="p-3 border-b">___</td><td class="p-3 border-b">___</td></tr>
            <tr><td class="p-3 border-b">___</td><td class="p-3 border-b">___</td><td class="p-3 border-b">___</td><td class="p-3 border-b">___</td></tr>
            <tr><td class="p-3 border-b">___</td><td class="p-3 border-b">___</td><td class="p-3 border-b">___</td><td class="p-3 border-b">___</td></tr>
          </tbody>
        </table>
      </div>`
    },
    {
      id: 'v4-ch5',
      title: 'Chapitre 27 — Standards de Qualité & Indicateurs de Performance',
      content: `<div class="space-y-6 text-gray-700 leading-relaxed">
        <p>Chez TOMY Global Services, nous mesurons notre performance pour garantir une amélioration continue de nos services.</p>

        <h3 class="text-xl font-bold text-brand-navy mt-8 mb-4">Indicateurs clés de performance (KPIs)</h3>

        <div class="grid gap-4 mt-4">
          <div class="bg-white border border-brand-gold/20 rounded-lg p-5">
            <h4 class="font-bold text-brand-navy text-lg mb-2">Taux de satisfaction client</h4>
            <p><strong>Cible :</strong> ≥ 95%</p>
            <p>Mesuré via un questionnaire de satisfaction envoyé après chaque dossier.</p>
          </div>
          <div class="bg-white border border-brand-gold/20 rounded-lg p-5">
            <h4 class="font-bold text-brand-navy text-lg mb-2">Taux de réponse WhatsApp</h4>
            <p><strong>Cible :</strong> 100% dans l'heure, 95% dans les 30 minutes</p>
            <p>Mesuré par un relevé hebdomadaire des temps de réponse.</p>
          </div>
          <div class="bg-white border border-brand-gold/20 rounded-lg p-5">
            <h4 class="font-bold text-brand-navy text-lg mb-2">Délai de préparation des dossiers</h4>
            <p><strong>Cible :</strong> 10 jours ouvrables maximum entre la signature du contrat et la soumission.</p>
          </div>
          <div class="bg-white border border-brand-gold/20 rounded-lg p-5">
            <h4 class="font-bold text-brand-navy text-lg mb-2">Taux de recommandation</h4>
            <p><strong>Cible :</strong> ≥ 40% des nouveaux clients viennent par recommandation.</p>
          </div>
        </div>

        <h3 class="text-xl font-bold text-brand-navy mt-8 mb-4">Standards de qualité</h3>
        <ul class="list-disc pl-6 space-y-1">
          <li>Chaque dossier est relu par un second consultant avant soumission.</li>
          <li>Chaque communication avec un client est tracée dans le dossier.</li>
          <li>Les délais de réponse sont respectés (1h WhatsApp, 24h email).</li>
          <li>Les formations mensuelles sont obligatoires pour tous les consultants.</li>
          <li>Les procédures sont mises à jour trimestriellement.</li>
        </ul>

        <h3 class="text-xl font-bold text-brand-navy mt-8 mb-4">Évaluation des consultants</h3>
        <p>Chaque consultant est évalué mensuellement sur :</p>
        <ul class="list-disc pl-6 space-y-1">
          <li>La qualité de ses dossiers (révision par le superviseur).</li>
          <li>Le respect des délais de réponse.</li>
          <li>Les retours clients.</li>
          <li>Le nombre de dossiers traités.</li>
          <li>Le taux de conversion des consultations en contrats.</li>
        </ul>
      </div>`
    },
    {
      id: 'v4-ch6',
      title: 'Chapitre 28 — Formation des Nouveaux Consultants & Onboarding',
      content: `<div class="space-y-6 text-gray-700 leading-relaxed">
        <p>L'onboarding d'un nouveau consultant est un processus structuré qui garantit que chaque membre de l'équipe maîtrise les standards de TOMY Global Services.</p>

        <h3 class="text-xl font-bold text-brand-navy mt-8 mb-4">Programme d'intégration (4 semaines)</h3>

        <h4 class="text-lg font-bold text-brand-navy mt-6 mb-3">Semaine 1 — Découverte</h4>
        <ul class="list-disc pl-6 space-y-1">
          <li>Lecture complète du Manuel de Consultation (ce document).</li>
          <li>Présentation de l'équipe et des locaux.</li>
          <li>Formation sur les outils internes et le système de gestion.</li>
          <li>Observation de consultations par des consultants expérimentés.</li>
        </ul>

        <h4 class="text-lg font-bold text-brand-navy mt-6 mb-3">Semaine 2 — Formation pratique</h4>
        <ul class="list-disc pl-6 space-y-1">
          <li>Étude des guides par pays (Volume 3).</li>
          <li>Exercices de préparation de dossiers factices.</li>
          <li>Jeux de rôle sur les scripts de consultation.</li>
          <li>Formation sur la gestion des objections.</li>
        </ul>

        <h4 class="text-lg font-bold text-brand-navy mt-6 mb-3">Semaine 3 — Accompagnement supervisé</h4>
        <ul class="list-disc pl-6 space-y-1">
          <li>Participation à des consultations réelles en observation.</li>
          <li>Préparation de dossiers sous supervision.</li>
          <li>Premiers appels et messages WhatsApp supervisés.</li>
        </ul>

        <h4 class="text-lg font-bold text-brand-navy mt-6 mb-3">Semaine 4 — Autonomie progressive</h4>
        <ul class="list-disc pl-6 space-y-1">
          <li>Consultations en autonomie avec révision des dossiers.</li>
          <li>Validation des compétences par le superviseur.</li>
          <li>Évaluation de fin de période d'essai.</li>
        </ul>

        <div class="bg-brand-gold/10 border border-brand-gold/30 rounded-lg p-5 mt-6">
          <p class="font-bold text-brand-navy">Note importante :</p>
          <p>La période d'essai est de 3 mois. À la fin de chaque mois, une évaluation est réalisée. Si les standards ne sont pas atteints, la période d'essai peut être prolongée ou le contrat résilié.</p>
        </div>
      </div>`
    },
    {
      id: 'v4-ch7',
      title: 'Chapitre 29 — Lexique & Références Utiles',
      content: `<div class="space-y-6 text-gray-700 leading-relaxed">
        <p>Ce lexique définit les termes clés utilisés dans le domaine de l'immigration et de la mobilité internationale.</p>

        <div class="grid gap-3">
          <div class="bg-white border border-gray-200 rounded-lg p-4">
            <h4 class="font-bold text-brand-navy">Ambassade / Consulat</h4>
            <p>Représentation diplomatique d'un pays. C'est généralement là que les demandes de visa sont déposées et traitées.</p>
          </div>
          <div class="bg-white border border-gray-200 rounded-lg p-4">
            <h4 class="font-bold text-brand-navy">Visa de court séjour</h4>
            <p>Visa permettant un séjour de moins de 90 jours (tourisme, visite, affaires).</p>
          </div>
          <div class="bg-white border border-gray-200 rounded-lg p-4">
            <h4 class="font-bold text-brand-navy">Visa de long séjour</h4>
            <p>Visa permettant un séjour de plus de 90 jours (études, travail, famille).</p>
          </div>
          <div class="bg-white border border-gray-200 rounded-lg p-4">
            <h4 class="font-bold text-brand-navy">Titre de séjour</h4>
            <p>Document officiel délivré par les autorités d'immigration autorisant un étranger à résider dans le pays.</p>
          </div>
          <div class="bg-white border border-gray-200 rounded-lg p-4">
            <h4 class="font-bold text-brand-navy">Résidence permanente</h4>
            <p>Statut qui permet à un étranger de résider indéfiniment dans un pays.</p>
          </div>
          <div class="bg-white border border-gray-200 rounded-lg p-4">
            <h4 class="font-bold text-brand-navy">Naturalisation</h4>
            <p>Processus par lequel un étranger obtient la citoyenneté d'un pays.</p>
          </div>
          <div class="bg-white border border-gray-200 rounded-lg p-4">
            <h4 class="font-bold text-brand-navy">Parrainage</h4>
            <p>Engagement d'une personne ou d'une organisation à soutenir la demande d'immigration d'une autre personne.</p>
          </div>
          <div class="bg-white border border-gray-200 rounded-lg p-4">
            <h4 class="font-bold text-brand-navy">Apostille</h4>
            <p>Certification internationale de documents officiels conforme à la Convention de La Haye.</p>
          </div>
        </div>

        <h3 class="text-xl font-bold text-brand-navy mt-8 mb-4">Références utiles</h3>
        <ul class="list-disc pl-6 space-y-1">
          <li><strong>IRCC (Canada) :</strong> www.canada.ca/immigration</li>
          <li><strong>SEF (Portugal) :</strong> www.sef.pt</li>
          <li><strong>France Visas :</strong> www.france-visas.gouv.fr</li>
          <li><strong>UK Home Office :</strong> www.gov.uk/government/organisations/home-office</li>
          <li><strong>USCIS (États-Unis) :</strong> www.uscis.gov</li>
          <li><strong>Australian Home Affairs :</strong> www.homeaffairs.gov.au</li>
          <li><strong>Immigration NZ :</strong> www.immigration.govt.nz</li>
        </ul>
      </div>`
    }
  ]
};

export default volume4;
