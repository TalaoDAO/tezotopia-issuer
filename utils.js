exports.VOUCHER_OBJ = {
    "@context": [
        "https://www.w3.org/2018/credentials/v1",
        {
            "name": "https://schema.org/name",
            "description": "https://schema.org/description",
            "TezVoucher_1": {
                "@id": "https://github.com/TalaoDAO/context/blob/main/README.md",
                "@context": {
                    "@version": 1.1,
                    "@protected": true,
                    "schema": "https://schema.org/",
                    "id": "@id",
                    "type": "@type",
                    "associatedAddress": {
                        "@id": "https://schema.org/address",
                        "@context": {
                            "@protected": true,
                            "blockchainTezos": "https://schema.org/blockchain",
                            "blockchainEthereum": "https://schema.org/blockchain"
                        }
                    },
                    "affiliate": {
                        "@id": "https://github.com/TalaoDAO/context/blob/main/README.md",
                        "@context": {
                            "@version": 1.1,
                            "@protected": true,
                            "name": "schema:name",
                            "did": "schema:identifier",
                            "email": "schema:email",
                            "phone": "schema:telephone",
                            "pseudo": "schema:givenName",
                            "benefit": {
                                "@id": "https://github.com/TalaoDAO/context/blob/main/README",
                                "@context": {
                                    "price": "schema:value",
                                    "category": "schema:category",
                                    "incentiveCompensation": "schema:incentiveCompensation"
                                }
                            },
                            "paymentAccepted": {
                                "@id": "schema:paymentAccepted",
                                "@context": {
                                    "blockchain": "schema:name",
                                    "currency": "schema:currency",
                                    "blockchainAccount": "schema:identifier"
                                }
                            }
                        }
                    },
                    "offers": {
                        "@id": "schema:offer",
                        "@context": {
                            "@version": 1.1,
                            "@protected": true,
                            "startDate": "schema:date",
                            "category": "schema:category",
                            "duration": "schema:duration",
                            "endDate": "schema:date",
                            "benefit": {
                                "@id": "https://github.com/TalaoDAO/context/blob/main/README",
                                "@context": {
                                    "price": "schema:value",
                                    "category": "schema:category",
                                    "discount": "schema:discount"
                                }
                            },
                            "offeredBy": {
                                "@id": "schema:offeredBy",
                                "@context": {
                                    "@version": 1.1,
                                    "@protected": true,
                                    "description": "schema:description",
                                    "website": "schema:website",
                                    "logo": {
                                        "@id": "schema:image",
                                        "@type": "@id"
                                    },
                                    "did": "schema:identifier",
                                    "name": "schema:name",
                                    "paymentMethod": {
                                        "@id": "schema:paymentMethod",
                                        "@context": {
                                            "currency": "schema:currency",
                                            "blockchain": "schema:name",
                                            "blockchainAccount": "schema:identifier"
                                        }
                                    }
                                }
                            }
                        }
                    },
                    "issuedBy": {
                        "@id": "schema:issuedBy",
                        "@context": {
                            "@version": 1.1,
                            "@protected": true,
                            "website": "schema:website",
                            "logo": {
                                "@id": "schema:image",
                                "@type": "@id"
                            },
                            "did": "schema:identifier",
                            "name": "schema:name",
                            "paymentAccepted": {
                                "@id": "schema:paymentMethod",
                                "@context": {
                                    "currency": "schema:currency",
                                    "blockchain": "schema:name",
                                    "blockchainAccount": "schema:identifier"
                                }
                            },
                            "paymentMethod": {
                                "@id": "schema:paymentMethod",
                                "@context": {
                                    "currency": "schema:currency",
                                    "blockchain": "schema:name",
                                    "blockchainAccount": "schema:identifier"
                                }
                            }
                        }
                    }
                }
            }
        }
    ],
    "id": "urn:uuid:random",
    "type": [
        "VerifiableCredential",
        "TezVoucher_1"
    ],
    "issuer": "did:tz:issuer",
    "name": [
        {
            "@value": "15% off Tezotopia NFTs",
            "@language": "en"
        },
        {
            "@value": "15% off Tezotopia NFTs",
            "@language": "de"
        },
        {
            "@value": "15% de reduction sur les NFT Tezotopia",
            "@language": "fr"
        }
    ],
    "description": [
        {
            "@language": "en",
            "@value": "Get a 15% discount on your first Tezotop Block ! "
        },
        {
            "@language": "de",
            "@value": "Erhalten Sie 15% Rabatt auf Ihren ersten Tezotop-Block!"
        },
        {
            "@language": "fr",
            "@value": "B??n??ficiez de 15% de r??duction sur votre premier Bloc Tezotop ! "
        }
    ],
    "issuanceDate": "2022-00-00T00:00:00Z",
    "expirationDate": "2023-00-00T00:00:00Z",
        "credentialSubject": {
        "id": "did:wallet",
        "type": "TezVoucher_1",
        "associatedAddress": {
            "blockchainTezos": "tz1345765476547654",
            "blockchainEthereum": "0x1345765476547654"
        },
        "offers": [
            {
                "startDate": "2022-04-08T19:55:00Z",
                "endDate": "2022-06-08T19:55:00Z",
                "category": "discounted_coupon",
                "duration": "30",
                "benefit": {
                    "category": "discount",
                    "discount": "15%"
                },
                "offeredBy": {
                    "logo": "ipfs://QmZmdndUVRoxiVhUnjGrKnNPn8ah3jT8fxTCLMnAzRAFFZ",
                    "name": "GifGames",
                    "description": "gaming platform Tezotopia",
                    "paymentMethod": {
                        "blockchain": "Tezos",
                        "currency": "XTZ",
                        "blockchainAccount": "tz1iyjrTUNxDpPaqNZ84ipGELAcTWYg66789"
                    }
                }
            }
        ],
        "issuedBy": {
            "logo": "ipfs://QmZmdndUVRoxiVhUnjGrKnNPn8ah3jT8fxTCLMnAzRAFFZ",
            "name": "Talao",
            "paymentAccepted": {
                "blockchain": "Tezos",
                "currency": "XTZ",
                "blockchainAccount": "tz1NyjrTUNxDpPaqNZ84ipGELAcTWYg6s5Du"
            },
            "paymentMethod": {
                "blockchain": "Tezos",
                "currency": "XTZ",
                "blockchainAccount": "tz1NyjrTUNxDpPaqNZ84ipGELAcTWYg6s5Du"
            }
        },
        "affiliate": {
            "name": "to be filled or removed",
            "email": "to be filled or removed",
            "phone": "to be filled or removed",
            "pseudo": "to be filled or removed",
            "paymentAccepted": {
                "blockchain": "Tezos",
                "currency": "XTZ",
                "blockchainAccount": "tz1NyjrTUNxDpPaqNZ84ipGELAcTWYg5555"
            },
            "benefit": {
                "category": "commission",
                "incentiveCompensation": "2%"
            }
        }
    }
}

exports.CREDENTIAL_MANIFEST =  {
    "id":"Tezotopia_issuer",
    "issuer":{
        "id":"did:tz:tz1NyjrTUNxDpPaqNZ84ipGELAcTWYg6s5Du",
        "name":"Talao issuer for Tezotopia"
    },
    "presentation_definition":{
        "id": "32f54163-7166-48f1-93d8-ff217bdb0653",
        "input_descriptors": [
            {
                "id": "Associated_address_input",
                "purpose" : "Select your Tezos associated wallet",
                "constraints": {
                    "fields": [
                        {
                            "path": [
                                "$.type"
                            ],
                            "filter": {
                                "type": "string",
                                "pattern": "TezosAssociatedAddress"
                            }
                        }
                    ]
                }
            }
        ]
    }
}
