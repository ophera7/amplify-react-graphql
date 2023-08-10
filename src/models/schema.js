export const schema = {
    "models": {
        "District": {
            "name": "District",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "ApprovedDistricts": {
                    "name": "ApprovedDistricts",
                    "isArray": false,
                    "type": {
                        "enum": "ApprovedDistrictList"
                    },
                    "isRequired": true,
                    "attributes": []
                },
                "SoonToBeApprovedDistricts": {
                    "name": "SoonToBeApprovedDistricts",
                    "isArray": false,
                    "type": {
                        "enum": "SoonToBeApprovedDistricts"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                }
            },
            "syncable": true,
            "pluralName": "Districts",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "allow": "public",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            }
                        ]
                    }
                }
            ]
        },
        "CustomerSelect": {
            "name": "CustomerSelect",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "Customer": {
                    "name": "Customer",
                    "isArray": false,
                    "type": {
                        "enum": "Cusomter"
                    },
                    "isRequired": true,
                    "attributes": []
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                }
            },
            "syncable": true,
            "pluralName": "CustomerSelects",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "allow": "public",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            }
                        ]
                    }
                }
            ]
        },
        "TerritorySelect": {
            "name": "TerritorySelect",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "Territory": {
                    "name": "Territory",
                    "isArray": false,
                    "type": {
                        "enum": "Territory"
                    },
                    "isRequired": true,
                    "attributes": []
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                }
            },
            "syncable": true,
            "pluralName": "TerritorySelects",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "allow": "public",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            }
                        ]
                    }
                }
            ]
        },
        "Note": {
            "name": "Note",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "name": {
                    "name": "name",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "description": {
                    "name": "description",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "image": {
                    "name": "image",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                }
            },
            "syncable": true,
            "pluralName": "Notes",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "allow": "public",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            }
                        ]
                    }
                }
            ]
        },
        "AssessmentAccountDetails": {
            "name": "AssessmentAccountDetails",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "AccountName": {
                    "name": "AccountName",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "AccountManagerName": {
                    "name": "AccountManagerName",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "AccountSAName": {
                    "name": "AccountSAName",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "AccountSalesforceLink": {
                    "name": "AccountSalesforceLink",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "CustomerSalesConsoleLink": {
                    "name": "CustomerSalesConsoleLink",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "ProServTrainingSpentT12M": {
                    "name": "ProServTrainingSpentT12M",
                    "isArray": false,
                    "type": "Float",
                    "isRequired": false,
                    "attributes": []
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                }
            },
            "syncable": true,
            "pluralName": "AssessmentAccountDetails",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "allow": "public",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            }
                        ]
                    }
                }
            ]
        },
        "GtoGEDescription": {
            "name": "GtoGEDescription",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "Company": {
                    "name": "Company",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "Quarter": {
                    "name": "Quarter",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "Date": {
                    "name": "Date",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                }
            },
            "syncable": true,
            "pluralName": "GtoGEDescriptions",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "allow": "public",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            }
                        ]
                    }
                }
            ]
        },
        "Dimension": {
            "name": "Dimension",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "StrategicDrivers": {
                    "name": "StrategicDrivers",
                    "isArray": false,
                    "type": {
                        "nonModel": "StrategicDrivers"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "CommericalReadiness": {
                    "name": "CommericalReadiness",
                    "isArray": false,
                    "type": {
                        "nonModel": "CommericalReadiness"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "TechnicalReadiness": {
                    "name": "TechnicalReadiness",
                    "isArray": false,
                    "type": {
                        "nonModel": "TechnicalReadiness"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "OverallReadiness": {
                    "name": "OverallReadiness",
                    "isArray": false,
                    "type": "Float",
                    "isRequired": false,
                    "attributes": []
                },
                "AssessmentAccountDetails": {
                    "name": "AssessmentAccountDetails",
                    "isArray": false,
                    "type": {
                        "model": "AssessmentAccountDetails"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "association": {
                        "connectionType": "HAS_ONE",
                        "associatedWith": [
                            "id"
                        ],
                        "targetNames": [
                            "dimensionAssessmentAccountDetailsId"
                        ]
                    }
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                },
                "dimensionAssessmentAccountDetailsId": {
                    "name": "dimensionAssessmentAccountDetailsId",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": false,
                    "attributes": []
                }
            },
            "syncable": true,
            "pluralName": "Dimensions",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "allow": "public",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            }
                        ]
                    }
                }
            ]
        }
    },
    "enums": {
        "SoonToBeApprovedDistricts": {
            "name": "SoonToBeApprovedDistricts",
            "values": [
                "GULFCOAST",
                "NORTHCENTRAL",
                "SOUTHCENTRAL",
                "OHIOVALLEY"
            ]
        },
        "ApprovedDistrictList": {
            "name": "ApprovedDistrictList",
            "values": [
                "MIDWEST"
            ]
        },
        "Cusomter": {
            "name": "Cusomter",
            "values": [
                "COMPANYX",
                "COMPANYY",
                "COMPANYZ"
            ]
        },
        "Territory": {
            "name": "Territory",
            "values": [
                "MWGF01",
                "MWGF02",
                "MWGF03",
                "MWGF04",
                "MWGF05",
                "MWGF06",
                "MWGF07",
                "MWGF08",
                "MWGF09"
            ]
        },
        "FutureState": {
            "name": "FutureState",
            "values": [
                "WATERFALL",
                "AGILE",
                "ATTAINED"
            ]
        },
        "CurrentState": {
            "name": "CurrentState",
            "values": [
                "WATERFALL",
                "AGILE"
            ]
        },
        "Stage4": {
            "name": "Stage4",
            "values": [
                "INPROCESS",
                "COMPLETED"
            ]
        },
        "Stage3": {
            "name": "Stage3",
            "values": [
                "DEPLOYED",
                "WAITINGCUSTOMERACTION",
                "WAITINGONPARTNER"
            ]
        },
        "Stage2": {
            "name": "Stage2",
            "values": [
                "ASSESSMENT",
                "INTRODUCTION",
                "NEXTSTEPS"
            ]
        },
        "Stage1": {
            "name": "Stage1",
            "values": [
                "INTRODUCTION",
                "SCHEDULED",
                "DELIVERED"
            ]
        }
    },
    "nonModels": {
        "QuantificationofBusinessImpact": {
            "name": "QuantificationofBusinessImpact",
            "fields": {
                "QuantificationofBusinessImpact": {
                    "name": "QuantificationofBusinessImpact",
                    "isArray": false,
                    "type": "Float",
                    "isRequired": false,
                    "attributes": []
                },
                "BusinessImpactQuanitified": {
                    "name": "BusinessImpactQuanitified",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "PrimaryBenefit": {
                    "name": "PrimaryBenefit",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "SecondaryBenefit": {
                    "name": "SecondaryBenefit",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "AdditionalComments": {
                    "name": "AdditionalComments",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "UnderstandingofBusinessDriversandOutcomes": {
            "name": "UnderstandingofBusinessDriversandOutcomes",
            "fields": {
                "UnderstandingofBusinessDriversandOutcomes": {
                    "name": "UnderstandingofBusinessDriversandOutcomes",
                    "isArray": false,
                    "type": "Float",
                    "isRequired": false,
                    "attributes": []
                },
                "BuisnessDriver1": {
                    "name": "BuisnessDriver1",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "BuisnessDriver2": {
                    "name": "BuisnessDriver2",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "BuisnessDriver3": {
                    "name": "BuisnessDriver3",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "AdditionalComments": {
                    "name": "AdditionalComments",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "StrategicITDirection": {
            "name": "StrategicITDirection",
            "fields": {
                "StrategicITDirection": {
                    "name": "StrategicITDirection",
                    "isArray": false,
                    "type": "Float",
                    "isRequired": false,
                    "attributes": []
                },
                "PrivateCloud": {
                    "name": "PrivateCloud",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "HybridCloud": {
                    "name": "HybridCloud",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "AWSAllIn": {
                    "name": "AWSAllIn",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "DigitalTransformation": {
                    "name": "DigitalTransformation",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "AdditionalComments": {
                    "name": "AdditionalComments",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "Governance": {
            "name": "Governance",
            "fields": {
                "Governance": {
                    "name": "Governance",
                    "isArray": false,
                    "type": "Float",
                    "isRequired": false,
                    "attributes": []
                },
                "Current": {
                    "name": "Current",
                    "isArray": false,
                    "type": {
                        "enum": "CurrentState"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "TransitionRoadMap": {
                    "name": "TransitionRoadMap",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "FutureState": {
                    "name": "FutureState",
                    "isArray": false,
                    "type": {
                        "enum": "FutureState"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "AdditionalComments": {
                    "name": "AdditionalComments",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "WorkingBackwards": {
            "name": "WorkingBackwards",
            "fields": {
                "WorkingBackwards": {
                    "name": "WorkingBackwards",
                    "isArray": false,
                    "type": "Float",
                    "isRequired": false,
                    "attributes": []
                },
                "WorkingBackwardsSessionDelivered": {
                    "name": "WorkingBackwardsSessionDelivered",
                    "isArray": false,
                    "type": {
                        "enum": "Stage1"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "AdditionalComments": {
                    "name": "AdditionalComments",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "CultureOfInnovation": {
            "name": "CultureOfInnovation",
            "fields": {
                "CultureOfInnovation": {
                    "name": "CultureOfInnovation",
                    "isArray": false,
                    "type": "Float",
                    "isRequired": false,
                    "attributes": []
                },
                "CultureOfInnovationSessionDelivered": {
                    "name": "CultureOfInnovationSessionDelivered",
                    "isArray": false,
                    "type": {
                        "enum": "Stage1"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "AdditionalComments": {
                    "name": "AdditionalComments",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "ProcurementFinanceApprovalforSpent": {
            "name": "ProcurementFinanceApprovalforSpent",
            "fields": {
                "ApproverName": {
                    "name": "ApproverName",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "Stage": {
                    "name": "Stage",
                    "isArray": false,
                    "type": {
                        "enum": "Stage4"
                    },
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "ProcurementFinanceApproval": {
            "name": "ProcurementFinanceApproval",
            "fields": {
                "ProcursementFinanceApproval": {
                    "name": "ProcursementFinanceApproval",
                    "isArray": false,
                    "type": "Float",
                    "isRequired": false,
                    "attributes": []
                },
                "ProcurementFinanceApprovalforSpent": {
                    "name": "ProcurementFinanceApprovalforSpent",
                    "isArray": false,
                    "type": {
                        "nonModel": "ProcurementFinanceApprovalforSpent"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "AdditionalComments": {
                    "name": "AdditionalComments",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "SecurityApprovalforPRODWorkloads": {
            "name": "SecurityApprovalforPRODWorkloads",
            "fields": {
                "ApproverName": {
                    "name": "ApproverName",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "Stage": {
                    "name": "Stage",
                    "isArray": false,
                    "type": {
                        "enum": "Stage4"
                    },
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "SecurityApproval": {
            "name": "SecurityApproval",
            "fields": {
                "SecurityApproval": {
                    "name": "SecurityApproval",
                    "isArray": false,
                    "type": "Float",
                    "isRequired": false,
                    "attributes": []
                },
                "SecurityApprovalforPRODWorkloads": {
                    "name": "SecurityApprovalforPRODWorkloads",
                    "isArray": false,
                    "type": {
                        "nonModel": "SecurityApprovalforPRODWorkloads"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "AdditionalComments": {
                    "name": "AdditionalComments",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "CCOE": {
            "name": "CCOE",
            "fields": {
                "CCOE": {
                    "name": "CCOE",
                    "isArray": false,
                    "type": "Float",
                    "isRequired": false,
                    "attributes": []
                },
                "NewCloudRolesDefine": {
                    "name": "NewCloudRolesDefine",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "AppTeamEngagementProcessEstablished": {
                    "name": "AppTeamEngagementProcessEstablished",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "CCOEEstablishedCommunityofPractice": {
                    "name": "CCOEEstablishedCommunityofPractice",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "CloudOperationalStructure": {
                    "name": "CloudOperationalStructure",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "CloudCareerPathDefined": {
                    "name": "CloudCareerPathDefined",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "CCOEDefined": {
                    "name": "CCOEDefined",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "AdditionalComments": {
                    "name": "AdditionalComments",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "AWSChampions": {
            "name": "AWSChampions",
            "fields": {
                "TitleorRole": {
                    "name": "TitleorRole",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "Name": {
                    "name": "Name",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "Sponsor": {
                    "name": "Sponsor",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "ExecutiveSponsor": {
            "name": "ExecutiveSponsor",
            "fields": {
                "ExecutiveSponsor": {
                    "name": "ExecutiveSponsor",
                    "isArray": false,
                    "type": "Float",
                    "isRequired": false,
                    "attributes": []
                },
                "AWSChampions": {
                    "name": "AWSChampions",
                    "isArray": false,
                    "type": {
                        "nonModel": "AWSChampions"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "AdditionalComments": {
                    "name": "AdditionalComments",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "PublicReference": {
            "name": "PublicReference",
            "fields": {
                "PublicReference": {
                    "name": "PublicReference",
                    "isArray": false,
                    "type": "Float",
                    "isRequired": false,
                    "attributes": []
                },
                "Stage": {
                    "name": "Stage",
                    "isArray": false,
                    "type": {
                        "enum": "Stage1"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "AdditionalComments": {
                    "name": "AdditionalComments",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "EA": {
            "name": "EA",
            "fields": {
                "EA": {
                    "name": "EA",
                    "isArray": false,
                    "type": "Float",
                    "isRequired": false,
                    "attributes": []
                },
                "Stage": {
                    "name": "Stage",
                    "isArray": false,
                    "type": {
                        "enum": "Stage1"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "AdditionalComments": {
                    "name": "AdditionalComments",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "AWSSupportPlan": {
            "name": "AWSSupportPlan",
            "fields": {
                "AWSSupportPlan": {
                    "name": "AWSSupportPlan",
                    "isArray": false,
                    "type": "Float",
                    "isRequired": false,
                    "attributes": []
                },
                "SupportPlan": {
                    "name": "SupportPlan",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "AdditionalComments": {
                    "name": "AdditionalComments",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "NDA": {
            "name": "NDA",
            "fields": {
                "NDA": {
                    "name": "NDA",
                    "isArray": false,
                    "type": "Float",
                    "isRequired": false,
                    "attributes": []
                },
                "Stage": {
                    "name": "Stage",
                    "isArray": false,
                    "type": {
                        "enum": "Stage1"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "AdditionalComments": {
                    "name": "AdditionalComments",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "StagesofAdoption": {
            "name": "StagesofAdoption",
            "fields": {
                "POC": {
                    "name": "POC",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "DevTestWorkload": {
                    "name": "DevTestWorkload",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "PRODWorkload": {
                    "name": "PRODWorkload",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "Adoption": {
            "name": "Adoption",
            "fields": {
                "Adoption": {
                    "name": "Adoption",
                    "isArray": false,
                    "type": "Float",
                    "isRequired": false,
                    "attributes": []
                },
                "StagesOfAdoption": {
                    "name": "StagesOfAdoption",
                    "isArray": false,
                    "type": {
                        "nonModel": "StagesofAdoption"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "AdditionalComments": {
                    "name": "AdditionalComments",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "AdditonalServices": {
            "name": "AdditonalServices",
            "fields": {
                "GuardDuty": {
                    "name": "GuardDuty",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "ACM": {
                    "name": "ACM",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "AmazonDetective": {
                    "name": "AmazonDetective",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "OtherServices": {
                    "name": "OtherServices",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "CoreServices": {
            "name": "CoreServices",
            "fields": {
                "SSO": {
                    "name": "SSO",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "AWSIAM": {
                    "name": "AWSIAM",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "MFARootUser": {
                    "name": "MFARootUser",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "AWSConfig": {
                    "name": "AWSConfig",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "SecurityHub": {
                    "name": "SecurityHub",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "KMS": {
                    "name": "KMS",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "Security": {
            "name": "Security",
            "fields": {
                "Security": {
                    "name": "Security",
                    "isArray": false,
                    "type": "Float",
                    "isRequired": false,
                    "attributes": []
                },
                "CoreServices": {
                    "name": "CoreServices",
                    "isArray": false,
                    "type": {
                        "nonModel": "CoreServices"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "AdditonalServices": {
                    "name": "AdditonalServices",
                    "isArray": false,
                    "type": {
                        "nonModel": "AdditonalServices"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "AdditionalComments": {
                    "name": "AdditionalComments",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "CurrentSetupandISVDetails": {
            "name": "CurrentSetupandISVDetails",
            "fields": {
                "VPN": {
                    "name": "VPN",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "Dx": {
                    "name": "Dx",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "Networking": {
            "name": "Networking",
            "fields": {
                "Networking": {
                    "name": "Networking",
                    "isArray": false,
                    "type": "Float",
                    "isRequired": false,
                    "attributes": []
                },
                "CurrentSetupandISVDetails": {
                    "name": "CurrentSetupandISVDetails",
                    "isArray": false,
                    "type": {
                        "nonModel": "CurrentSetupandISVDetails"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "AdditionalComments": {
                    "name": "AdditionalComments",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "ControlTowerDeployementorSimilarGovernance": {
            "name": "ControlTowerDeployementorSimilarGovernance",
            "fields": {
                "ControlTowerDeployementorSimilarGovernance": {
                    "name": "ControlTowerDeployementorSimilarGovernance",
                    "isArray": false,
                    "type": "Float",
                    "isRequired": false,
                    "attributes": []
                },
                "Deployment": {
                    "name": "Deployment",
                    "isArray": false,
                    "type": {
                        "enum": "Stage3"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "AdditionalComments": {
                    "name": "AdditionalComments",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "PartnerProServeIntroduction": {
            "name": "PartnerProServeIntroduction",
            "fields": {
                "PartnerProServeIntroduction": {
                    "name": "PartnerProServeIntroduction",
                    "isArray": false,
                    "type": "Float",
                    "isRequired": false,
                    "attributes": []
                },
                "Stage": {
                    "name": "Stage",
                    "isArray": false,
                    "type": {
                        "enum": "Stage2"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "AdditonalComments": {
                    "name": "AdditonalComments",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "IntroductiontoIncentivePrograms": {
            "name": "IntroductiontoIncentivePrograms",
            "fields": {
                "IntroductiontoIncentivePrograms": {
                    "name": "IntroductiontoIncentivePrograms",
                    "isArray": false,
                    "type": "Float",
                    "isRequired": false,
                    "attributes": []
                },
                "Stage": {
                    "name": "Stage",
                    "isArray": false,
                    "type": {
                        "enum": "Stage1"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "AdditionalComments": {
                    "name": "AdditionalComments",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "TCODetailsorAWSCCURL": {
            "name": "TCODetailsorAWSCCURL",
            "fields": {
                "Delivered": {
                    "name": "Delivered",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "CostCalculator": {
                    "name": "CostCalculator",
                    "isArray": false,
                    "type": "Float",
                    "isRequired": false,
                    "attributes": []
                },
                "TCOWorkdocsURL": {
                    "name": "TCOWorkdocsURL",
                    "isArray": false,
                    "type": "AWSURL",
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "CostAssessmentTCOorWorkloadCostEstimateAWSCE": {
            "name": "CostAssessmentTCOorWorkloadCostEstimateAWSCE",
            "fields": {
                "CostAssessmentTCOorWorkloadCostEstimateAWSCE": {
                    "name": "CostAssessmentTCOorWorkloadCostEstimateAWSCE",
                    "isArray": false,
                    "type": "Float",
                    "isRequired": false,
                    "attributes": []
                },
                "TCODetailsorAWSCCURL": {
                    "name": "TCODetailsorAWSCCURL",
                    "isArray": false,
                    "type": {
                        "nonModel": "TCODetailsorAWSCCURL"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "AdditionalComments": {
                    "name": "AdditionalComments",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "WorkloadDeepDiveDiscussion": {
            "name": "WorkloadDeepDiveDiscussion",
            "fields": {
                "Delivered": {
                    "name": "Delivered",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "UseCaseDetails": {
                    "name": "UseCaseDetails",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "TechnicalDeepDiveWhiteBoarding": {
            "name": "TechnicalDeepDiveWhiteBoarding",
            "fields": {
                "TechnicalDeepDiveWhiteBoarding": {
                    "name": "TechnicalDeepDiveWhiteBoarding",
                    "isArray": false,
                    "type": "Float",
                    "isRequired": false,
                    "attributes": []
                },
                "WorkloadDeepDiveDiscussion": {
                    "name": "WorkloadDeepDiveDiscussion",
                    "isArray": false,
                    "type": {
                        "nonModel": "WorkloadDeepDiveDiscussion"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "AddditonalComments": {
                    "name": "AddditonalComments",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "TrainingSessionCompleted": {
            "name": "TrainingSessionCompleted",
            "fields": {
                "ArchitectingOnAWS": {
                    "name": "ArchitectingOnAWS",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "AWSOperations": {
                    "name": "AWSOperations",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "AWSSecurity": {
                    "name": "AWSSecurity",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "DevOpsOnAWS": {
                    "name": "DevOpsOnAWS",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "DatabaseMigration": {
                    "name": "DatabaseMigration",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "AWSAIML": {
                    "name": "AWSAIML",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "DatalakeOnAWS": {
                    "name": "DatalakeOnAWS",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "AWSTraining": {
            "name": "AWSTraining",
            "fields": {
                "AWSTraining": {
                    "name": "AWSTraining",
                    "isArray": false,
                    "type": "Float",
                    "isRequired": false,
                    "attributes": []
                },
                "TrainingSessionCompleted": {
                    "name": "TrainingSessionCompleted",
                    "isArray": false,
                    "type": {
                        "nonModel": "TrainingSessionCompleted"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "AdditionalComments": {
                    "name": "AdditionalComments",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "FoundationalImmersionDays": {
            "name": "FoundationalImmersionDays",
            "fields": {
                "General": {
                    "name": "General",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "Security": {
                    "name": "Security",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "Networking": {
                    "name": "Networking",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "ControlTowerLandingZone": {
                    "name": "ControlTowerLandingZone",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "AWSImmersionDays": {
            "name": "AWSImmersionDays",
            "fields": {
                "AWSImmersionDays": {
                    "name": "AWSImmersionDays",
                    "isArray": false,
                    "type": "Float",
                    "isRequired": false,
                    "attributes": []
                },
                "ImmersionDayType": {
                    "name": "ImmersionDayType",
                    "isArray": false,
                    "type": {
                        "nonModel": "FoundationalImmersionDays"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "AdvancedImmersionDays": {
                    "name": "AdvancedImmersionDays",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "AdditionalComments": {
                    "name": "AdditionalComments",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "AWSWARSessionorArchitecturalReview": {
            "name": "AWSWARSessionorArchitecturalReview",
            "fields": {
                "AWSWARSessionorArchitecturalReview": {
                    "name": "AWSWARSessionorArchitecturalReview",
                    "isArray": false,
                    "type": "Float",
                    "isRequired": false,
                    "attributes": []
                },
                "AdditionalComments": {
                    "name": "AdditionalComments",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "Stage": {
                    "name": "Stage",
                    "isArray": false,
                    "type": {
                        "enum": "Stage1"
                    },
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "AWSValuePropositionOverview": {
            "name": "AWSValuePropositionOverview",
            "fields": {
                "AWSValuePropositionOverview": {
                    "name": "AWSValuePropositionOverview",
                    "isArray": false,
                    "type": "Float",
                    "isRequired": false,
                    "attributes": []
                },
                "AdditionalComments": {
                    "name": "AdditionalComments",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "Stage": {
                    "name": "Stage",
                    "isArray": false,
                    "type": {
                        "enum": "Stage1"
                    },
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "CommericalReadiness": {
            "name": "CommericalReadiness",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": false,
                    "attributes": []
                },
                "CommercialReadiness": {
                    "name": "CommercialReadiness",
                    "isArray": false,
                    "type": "Float",
                    "isRequired": false,
                    "attributes": []
                },
                "NDA": {
                    "name": "NDA",
                    "isArray": false,
                    "type": {
                        "nonModel": "NDA"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "AWSSupportPlan": {
                    "name": "AWSSupportPlan",
                    "isArray": false,
                    "type": {
                        "nonModel": "AWSSupportPlan"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "EA": {
                    "name": "EA",
                    "isArray": false,
                    "type": {
                        "nonModel": "EA"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "PublicReference": {
                    "name": "PublicReference",
                    "isArray": false,
                    "type": {
                        "nonModel": "PublicReference"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "ExecutiveSponsor": {
                    "name": "ExecutiveSponsor",
                    "isArray": false,
                    "type": {
                        "nonModel": "ExecutiveSponsor"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "CCOE": {
                    "name": "CCOE",
                    "isArray": false,
                    "type": {
                        "nonModel": "CCOE"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "SecurityApproval": {
                    "name": "SecurityApproval",
                    "isArray": false,
                    "type": {
                        "nonModel": "SecurityApprovalforPRODWorkloads"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "ProcurementFinanceApproval": {
                    "name": "ProcurementFinanceApproval",
                    "isArray": false,
                    "type": {
                        "nonModel": "ProcurementFinanceApproval"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "AdditionalComments": {
                    "name": "AdditionalComments",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "StrategicDrivers": {
            "name": "StrategicDrivers",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": false,
                    "attributes": []
                },
                "StrategicDrivers": {
                    "name": "StrategicDrivers",
                    "isArray": false,
                    "type": "Float",
                    "isRequired": false,
                    "attributes": []
                },
                "CultureOfInnovation": {
                    "name": "CultureOfInnovation",
                    "isArray": false,
                    "type": {
                        "nonModel": "CultureOfInnovation"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "WorkingBackwards": {
                    "name": "WorkingBackwards",
                    "isArray": false,
                    "type": {
                        "nonModel": "WorkingBackwards"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "Governance": {
                    "name": "Governance",
                    "isArray": false,
                    "type": {
                        "nonModel": "Governance"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "StrategicITDirection": {
                    "name": "StrategicITDirection",
                    "isArray": false,
                    "type": {
                        "nonModel": "StrategicITDirection"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "UnderstandingofBusinessDriversandOutcomes": {
                    "name": "UnderstandingofBusinessDriversandOutcomes",
                    "isArray": false,
                    "type": {
                        "nonModel": "UnderstandingofBusinessDriversandOutcomes"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "QuantificationofBusinessImpact": {
                    "name": "QuantificationofBusinessImpact",
                    "isArray": false,
                    "type": {
                        "nonModel": "QuantificationofBusinessImpact"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "AdditionalComments": {
                    "name": "AdditionalComments",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "TechnicalReadiness": {
            "name": "TechnicalReadiness",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": false,
                    "attributes": []
                },
                "TechnicalReadiness": {
                    "name": "TechnicalReadiness",
                    "isArray": false,
                    "type": "Float",
                    "isRequired": false,
                    "attributes": []
                },
                "AWSValuePropositionOverview": {
                    "name": "AWSValuePropositionOverview",
                    "isArray": false,
                    "type": {
                        "nonModel": "AWSValuePropositionOverview"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "AWSWARSessionorArchitecturalReview": {
                    "name": "AWSWARSessionorArchitecturalReview",
                    "isArray": false,
                    "type": {
                        "nonModel": "AWSWARSessionorArchitecturalReview"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "AWSImmersionDays": {
                    "name": "AWSImmersionDays",
                    "isArray": false,
                    "type": {
                        "nonModel": "AWSImmersionDays"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "AWSTraining": {
                    "name": "AWSTraining",
                    "isArray": false,
                    "type": {
                        "nonModel": "AWSTraining"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "TechnicalDeepDiveWhiteBoarding": {
                    "name": "TechnicalDeepDiveWhiteBoarding",
                    "isArray": false,
                    "type": {
                        "nonModel": "TechnicalDeepDiveWhiteBoarding"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "CostAssessmentTCOorWorkloadCostEstimateAWSCE": {
                    "name": "CostAssessmentTCOorWorkloadCostEstimateAWSCE",
                    "isArray": false,
                    "type": {
                        "nonModel": "CostAssessmentTCOorWorkloadCostEstimateAWSCE"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "IntroductiontoIncentivePrograms": {
                    "name": "IntroductiontoIncentivePrograms",
                    "isArray": false,
                    "type": {
                        "nonModel": "IntroductiontoIncentivePrograms"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "PartnerProServeIntroduction": {
                    "name": "PartnerProServeIntroduction",
                    "isArray": false,
                    "type": {
                        "nonModel": "PartnerProServeIntroduction"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "ControlTowerDeployementorSimilarGovernance": {
                    "name": "ControlTowerDeployementorSimilarGovernance",
                    "isArray": false,
                    "type": {
                        "nonModel": "ControlTowerDeployementorSimilarGovernance"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "Networking": {
                    "name": "Networking",
                    "isArray": false,
                    "type": {
                        "nonModel": "Networking"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "Security": {
                    "name": "Security",
                    "isArray": false,
                    "type": {
                        "nonModel": "SecurityApprovalforPRODWorkloads"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "Adoption": {
                    "name": "Adoption",
                    "isArray": false,
                    "type": {
                        "nonModel": "Adoption"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "AdditionalComments": {
                    "name": "AdditionalComments",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                }
            }
        }
    },
    "codegenVersion": "3.4.4",
    "version": "5a1a19b31a186387912b7ba4ea594411"
};