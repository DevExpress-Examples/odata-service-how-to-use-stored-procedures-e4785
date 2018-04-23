Imports Microsoft.VisualBasic
Imports System
Imports System.Collections.Generic
Imports System.Data.Services
Imports System.Data.Services.Common
Imports System.Data.Services.Providers
Imports System.Linq
Imports System.ServiceModel.Web
Imports System.Web

#If DEBUG Then
<System.ServiceModel.ServiceBehavior(IncludeExceptionDetailInFaults:=True)> _
<NorthwindServiceVB.JSONPSupportBehavior> _
Public Class DataService
#Else
<NorthwindServiceVB.JSONPSupportBehavior> _
Public Class DataService
#End If
    Inherits DataService(Of NorthwindEntities)
    Implements IServiceProvider
    ' This method is called only once to initialize service-wide policies.
Public Shared Sub InitializeService(ByVal config As DataServiceConfiguration)
    ' TODO: set rules to indicate which entity sets and service operations are visible, updatable, etc.
    ' Examples:
    ' config.SetEntitySetAccessRule("MyEntityset", EntitySetRights.AllRead);
        config.SetServiceOperationAccessRule("CustOrderHist", ServiceOperationRights.AllRead)
    config.SetEntitySetAccessRule("*", EntitySetRights.All)
    config.DataServiceBehavior.MaxProtocolVersion = DataServiceProtocolVersion.V3
#If DEBUG Then
	config.UseVerboseErrors = True
#End If
End Sub

Public Function GetService(ByVal serviceType As Type) As Object Implements IServiceProvider.GetService
    If serviceType Is GetType(IDataServiceStreamProvider) Then
        ' Return the stream provider to the data service.
            Return New NorthwindServiceVB.ImageStreamProvider()
    End If
    Return Nothing
    End Function

    <WebGet> _
    Public Function CustOrderHist(ByVal customerID As String) As IQueryable(Of CustOrderHist_Result)
        Return CurrentDataSource.CustOrderHist(customerID).AsQueryable()
    End Function
End Class
